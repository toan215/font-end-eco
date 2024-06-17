function interpolateColor(color1, color2, factor) {
  var res = color1.slice();
  for (var i=0;i<3; i++) {
    res[i] = Math.round(res[i] + factor * (color2[i] - color1[i]));
  }
  return res;
};

function interpolateColors(color1, color2, steps) {
  var stepFactor = 1 / (steps - 1), out = [];
  color1 = color1.match(/\d+/g).map(Number);
  color2 = color2.match(/\d+/g).map(Number);

  for(var i=0;i<steps;i++) {
    out.push("rgb(" + interpolateColor(color1, color2, stepFactor * i).join(',') + ")");
  }
  return out;
}

function RGB(hex) {
  var res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  function p16(int){return parseInt(int, 16)}
  return "rgb(" + [p16(res[1]), p16(res[2]), p16(res[3])].join(',') + ")";
}

(function(){
  var offset = 300, colorSteps = 5,
  cl = $('#tmp').remove().clone().removeAttr('id'),
  colors = ['#f34236','#d6c571','#88bc67','#2e8174','#143969','#0a1123'].reverse();

  (function createCurve(i, loop=0){
    if(i<colors.length){
      var cs = interpolateColors(RGB(colors[i]), RGB(colors[i+1]?colors[i+1]:'#000000'), colorSteps+1);
      cs.pop();
      cs.forEach((color,x) => {
        var tmp = cl.clone();
        tmp.css({
          'top': loop*offset,
          'fill': color,
          'border-bottom': $(window).innerHeight() + 'px solid ' + color
        });

        $('container').append(tmp); loop++;
      });
      createCurve(i+1, loop);
    }
  })(0)

  $('container').css('margin-top', $(window).innerHeight()/2);

  $(window).resize(function(){
    $('container').css('margin-top', $(window).innerHeight()/2);
    $('container svg').css('border-bottom-width', $(window).innerHeight() + 'px');
  });

  $(window).scroll(function() {
    var wh = $(window).innerHeight(),
        sh = $('body')[0].scrollHeight,
        st = $(window).scrollTop(),
        percent = (st-(sh-wh))/(wh);
    
    $('#msg').css('opacity',percent>0?percent:'');
    
    if(st > sh/2){
      $('#msg').addClass('prep').text('pretty cool huh?');
    }else{
      $('#msg').removeClass('prep').text('scroll me');
    }
  });
})();
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
window.addEventListener('resize', checkOrientation);

