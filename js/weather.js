const wrapper = document.querySelector(".wrapper"),
  inputPart = document.querySelector(".input-part"),
  infoTxt = inputPart.querySelector(".info-txt"),
  inputField = inputPart.querySelector("input"),
  locationBtn = inputPart.querySelector("button"),
  weatherPart = wrapper.querySelector(".weather-part"),
  forecastSection = wrapper.querySelector(".forecast"),
  forecastDetails = forecastSection.querySelector(".forecast-details"),
  wIcon = weatherPart.querySelector("img"),
  arrowBack = wrapper.querySelector("header i");

let api;
let apiKey = "b190a0605344cc4f3af08d0dd473dd25";

const weatherChartCtx = document.getElementById("weatherChart").getContext("2d");
let weatherChart;

// Function to create or update weather chart
function createWeatherChart(labels, data) {
  if (weatherChart) {
    weatherChart.destroy();
  }

  weatherChart = new Chart(weatherChartCtx, {
    type: "line", // Change chart type as needed (line, bar, etc.)
    data: {
      labels: labels,
      datasets: [{
        label: "Temperature (°C)",
        data: data,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

// Event listeners
inputField.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && inputField.value.trim() !== "") {
    requestApi(inputField.value.trim());
  }
});

locationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert("Your browser does not support geolocation API.");
  }
});

// Function to request weather data
function requestApi(city) {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  fetchData();
}

// Function to handle geolocation success
function onSuccess(position) {
  const { latitude, longitude } = position.coords;
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  fetchData();
}

// Function to handle geolocation error
function onError(error) {
  infoTxt.innerText = error.message;
  infoTxt.classList.add("error");
  clearWeatherData();
}

// Function to fetch weather data from API
function fetchData() {
  infoTxt.innerText = "Fetching weather details...";
  infoTxt.classList.add("pending");

  fetch(api)
    .then((res) => res.json())
    .then((result) => {
      if (result.cod && result.cod === "404") {
        infoTxt.innerText = `${inputField.value} is not a valid city name`;
        infoTxt.classList.replace("pending", "error");
        clearWeatherData();
      } else {
        clearWeatherData(); // Clear previous weather and forecast data
        weatherDetails(result);
        fetchForecast(result.coord.lat, result.coord.lon); // Fetch 7-day forecast
        fetchHourlyForecast(result.coord.lat, result.coord.lon); // Fetch hourly forecast
      }
    })
    .catch(() => {
      infoTxt.innerText = "Something went wrong";
      infoTxt.classList.replace("pending", "error");
      clearWeatherData();
    });
}



// Function to display weather details
function weatherDetails(info) {
  const { name: city, sys: { country }, weather: [{ description, id }], main: { temp, feels_like, humidity }, wind: { speed }, dt } = info;
  
  const weatherDate = new Date(dt * 1000).toLocaleString('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  wIcon.src = getWeatherIcon(id);
  weatherPart.querySelector(".temp .numb").innerText = Math.round(temp);
  weatherPart.querySelector(".weather").innerText = description;
  weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
  weatherPart.querySelector(".temp .numb-2").innerText = Math.round(feels_like);
  weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
  weatherPart.querySelector(".wind span").innerText = `${speed} m/s`;
  weatherPart.querySelector(".date-time").innerText = weatherDate;

  infoTxt.classList.remove("pending", "error");
  infoTxt.innerText = "";
  inputField.value = "";
  wrapper.classList.add("active");
}

// Function to fetch daily forecast data
function fetchForecast(latitude, longitude) {
  const forecastApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&units=metric&appid=${apiKey}`;
  
  fetch(forecastApi)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod && data.cod === "404") {
        infoTxt.innerText = "Forecast data not available";
        infoTxt.classList.replace("pending", "error");
        clearForecast();
      } else {
        updateForecast(data.daily.slice(1, 8)); // Update forecast for next 7 days
      }
    })
    .catch(() => {
      infoTxt.innerText = "Forecast data not available";
      infoTxt.classList.replace("pending", "error");
      clearForecast();
    });
}


// Function to fetch hourly forecast data
function fetchHourlyForecast(latitude, longitude) {
  const hourlyForecastApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,daily,minutely&units=metric&appid=${apiKey}`;
  
  fetch(hourlyForecastApi)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod && data.cod === "404") {
        infoTxt.innerText = "Hourly forecast data not available";
        infoTxt.classList.replace("pending", "error");
        clearHourlyForecast();
      } else {
        updateHourlyForecast(data.hourly.slice(0, 24)); // Update hourly forecast for next 24 hours
      }
    })
    .catch(() => {
      infoTxt.innerText = "Hourly forecast data not available";
      infoTxt.classList.replace("pending", "error");
      clearHourlyForecast();
    });
}

// Function to update daily forecast
function updateForecast(dailyData) {
  forecastDetails.innerHTML = ""; // Clear previous forecast details

  dailyData.forEach((day) => {
    const { dt, weather: [{ description, id }], temp: { max, min } } = day;
    const dayOfWeek = new Date(dt * 1000).toLocaleDateString('en', { weekday: 'long' });
    
    const forecastCard = document.createElement("div");
    forecastCard.classList.add("forecast-card");
    forecastCard.innerHTML = `
      <div class="forecast-day">${dayOfWeek}</div>
      <img src="${getWeatherIcon(id)}" alt="Weather Icon" />
      <div class="forecast-temp">
        <span class="max-temp">${Math.round(max)}°C</span> / 
        <span class="min-temp">${Math.round(min)}°C</span>
      </div>
      <div class="forecast-desc">${description}</div>
    `;
    forecastDetails.appendChild(forecastCard);
  });
}

// Function to update hourly forecast
function updateHourlyForecast(hourlyData) {
  const labels = [];
  const data = [];

  hourlyData.forEach((hour) => {
    const { dt, temp } = hour;
    const hourOfDay = new Date(dt * 1000).toLocaleTimeString('en', { hour: 'numeric', hour12: true });
    labels.push(hourOfDay);
    data.push(temp);
  });

  createWeatherChart(labels, data); // Create or update hourly weather chart
}

// Function to clear weather data
function clearWeatherData() {
  wIcon.src = "";
  weatherPart.querySelector(".temp .numb").innerText = "";
  weatherPart.querySelector(".weather").innerText = "";
  weatherPart.querySelector(".location span").innerText = "";
  weatherPart.querySelector(".temp .numb-2").innerText = "";
  weatherPart.querySelector(".humidity span").innerText = "";
  weatherPart.querySelector(".wind span").innerText = "";
  weatherPart.querySelector(".date-time").innerText = "";
  infoTxt.innerText = "";
  forecastSection.style.display = "block"; // Ensure forecast section is visible
  clearForecast(); // Clear previous forecast data
  clearHourlyForecast(); // Clear previous hourly forecast data
}


// Function to clear forecast data
function clearForecast() {
  forecastDetails.innerHTML = ""; // Clear daily forecast details
}

// Function to clear hourly forecast data
function clearHourlyForecast() {
  if (weatherChart) {
    weatherChart.destroy();
  }
}

// Function to get weather icon based on weather id
function getWeatherIcon(weatherId) {
  if (weatherId === 800) {
    return "icons/clear.svg";
  } else if (weatherId >= 200 && weatherId <= 232) {
    return "icons/storm.svg";
  } else if (weatherId >= 600 && weatherId <= 622) {
    return "icons/snow.svg";
  } else if (weatherId >= 701 && weatherId <= 781) {
    return "icons/haze.svg";
  } else if (weatherId >= 801 && weatherId <= 804) {
    return "icons/cloud.svg";
  } else if ((weatherId >= 500 && weatherId <= 531) || (weatherId >= 300 && weatherId <= 321)) {
    return "icons/rain.svg";
  } else {
    return "icons/unknown.svg";
  }
}

// Event listener for back button
arrowBack.addEventListener("click", () => {
  wrapper.classList.remove("active");
  clearWeatherData();
});

// Change Color Theme
var isDark = false;
const colors = [
  "rgb(255, 255, 255)",
];
const colorBtns = document.querySelectorAll(".theme-color");
const darkModeBtn = document.querySelector(".dark-mode-btn");

darkModeBtn.addEventListener("click", () => {
  isDark = !isDark;
  changeTheme(isDark ? "#272727" : colors[0]);
});

colorBtns.forEach((btn, index) => {
  btn.style.backgroundColor = colors[index];
  btn.addEventListener("click", () => {
    changeTheme(btn.style.backgroundColor);
  });
});

function changeTheme(color) {
  document.documentElement.style.setProperty("--primary-color", color);
  saveTheme(color);
}

function saveTheme(color) {
  localStorage.setItem("theme", color);
}

function getTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    changeTheme(theme);
  }
}
// var makeItRain = function() {
//   //clear out everything
//   $('.rain').empty();

//   var increment = 0;
//   var drops = "";
//   var backDrops = "";

//   while (increment < 100) {
//     //couple random numbers to use for various randomizations
//     //random number between 98 and 1
//     var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
//     //random number between 5 and 2
//     var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
//     //increment
//     increment += randoFiver;
//     //add in a new raindrop with various randomizations to certain CSS properties
//     drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
//     backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
//   }

//   $('.rain.front-row').append(drops);
//   $('.rain.back-row').append(backDrops);
// }

// $('.splat-toggle.toggle').on('click', function() {
//   $('body').toggleClass('splat-toggle');
//   $('.splat-toggle.toggle').toggleClass('active');
//   makeItRain();
// });

// $('.back-row-toggle.toggle').on('click', function() {
//   $('body').toggleClass('back-row-toggle');
//   $('.back-row-toggle.toggle').toggleClass('active');
//   makeItRain();
// });

// $('.single-toggle.toggle').on('click', function() {
//   $('body').toggleClass('single-toggle');
//   $('.single-toggle.toggle').toggleClass('active');
//   makeItRain();
// });

// makeItRain();
getTheme(); // Initialize theme on page load
