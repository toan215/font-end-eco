
// Check for orientation change
function checkOrientation() {
  if (window.innerHeight > window.innerWidth) {
    // Portrait mode
    document.getElementById('rotate-message').style.display = 'flex';
    document.getElementById('contents').style.display = 'none';
  } else {
    // Landscape mode
    document.getElementById('rotate-message').style.display = 'none';
    document.getElementById('contents').style.display = 'block';
  }
}

// Initial check
checkOrientation();

// Add event listener for orientation change
window.addEventListener('resize', checkOrientation);

let isCheckingScroll = false;

function checkScroll() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    window.location.href = "plane.html";
  }
  isCheckingScroll = false;
}

function handleScroll() {
  if (!isCheckingScroll) {
    isCheckingScroll = true;
    requestAnimationFrame(checkScroll);
  }
}

// Attach scroll and resize event listeners
window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);

// Initial check on page load
window.addEventListener("load", handleScroll);
=======
window.addEventListener('resize', checkOrientation);
>>>>>>> 60f44717c48a6a73c2022a2730d1eb39c900a683
