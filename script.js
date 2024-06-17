
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



