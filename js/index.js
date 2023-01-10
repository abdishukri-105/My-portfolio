


// Get the animated text element
var animatedText = document.querySelector('.about');

// Get the top position of the animated text element
var animatedTextPosition = animatedText.getBoundingClientRect().top;

// Get the window height
var windowHeight = window.innerHeight;

// Listen for scroll events
window.addEventListener('scroll', function() {
  
  // Get the current scroll position
  var scrollPosition = window.pageYOffset;
  
  // Check if the animated text element is within the viewport
  if (scrollPosition > animatedTextPosition - windowHeight + 100) {
    animatedText.classList.add('visible');
  }
});
