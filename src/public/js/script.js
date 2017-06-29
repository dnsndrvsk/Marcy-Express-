var logo = document.querySelector('.main-logo');
logo.classList.remove('logo-followed');

var body = document.body;

var body_coords;


var storyX = document.querySelector('.story-x');
var storyX_img = storyX.querySelector('.story-image');

var storyY = document.querySelector('.story-y');
var storyY_coords;
var storyY_img = storyY.querySelector('.story-image');

var form = document.querySelector('.subscribe');
form.classList.add('subscribe-hide');

var viewport;

// DEFINE NAVIGATION BEHAVIOR--------------------------------------------------------------------
var nav_toggle = document.querySelector('.nav-toggle');
var nav = document.querySelector('.main-navigation');

nav_toggle.style.display = 'block';

nav_toggle.addEventListener('click', function(e) {
  nav_toggle.classList.toggle('open');
  
  if (nav_toggle.classList.contains('open')) {
    nav.classList.remove('navigation-hide');
    nav.classList.add('navigation-show');
    
    return;
  } 
  
  if (!nav_toggle.classList.contains('open')) {
    nav.classList.remove('navigation-show');
    nav.classList.add('navigation-hide');
    
    return;
  }
});

nav.addEventListener('click', function(e) {
  if ( e.target.tagName == 'A' ) {
    
    nav_toggle.classList.remove('open');
    
    nav.classList.remove('navigation-show');
    nav.classList.add('navigation-hide');
  }
});



// DEFINE ONSCROLL HANDLER--------------------------------------------------------------------
function handleScroll() {
  
  var clear;
  
  clearTimeout(clear);
  
  clear = setTimeout(function() {
    body_coords = body.getBoundingClientRect();
    storyY_coords = storyY.getBoundingClientRect();
    viewport = window.innerHeight;
    
    
  
    // HANDLING LOGO BEHAVIOR--------------------------------------------------------------------
    if (body_coords.top < 10 && !logo.classList.contains('logo-followed')) {
      logo.classList.add('logo-followed');
    } 
    
    if (body_coords.top == 0) {
      logo.classList.remove('logo-followed');
    }
    
    
    
    
    // HANDLING STORY-X IMAGE--------------------------------------------------------------------
    if (body_coords.top < -400 && !storyX_img.classList.contains('image-animate')) {
      storyX_img.classList.remove('image-reset');
      storyX_img.classList.add('image-animate'); 
    } 
    
    if (body_coords.top > -400 && !storyX_img.classList.contains('image-reset')) {
      storyX_img.classList.remove('image-animate');
      storyX_img.classList.add('image-reset'); 
    }
    
    
    
    
    
    // HANDLING STORY-Y IMAGE--------------------------------------------------------------------
    if (storyY_coords.top < 500 && !storyY_img.classList.contains('image-animate')) {
      storyY_img.classList.remove('image-reset'); 
      storyY_img.classList.add('image-animate'); 
    } 
    
    if ((storyY_coords.top < -400 || storyY_coords.top > 500) && storyY_img.classList.contains('image-animate')) {
      storyY_img.classList.remove('image-animate'); 
      storyY_img.classList.add('image-reset'); 
    }
    
    
    // HANDLING SUBSCRIBE FORM--------------------------------------------------------------------
    if ( ((body_coords.bottom - viewport) < 150) && !form.classList.contains('subscribe-show') ) {
      form.classList.remove('subscribe-hide');
      form.classList.add('subscribe-show');
    }
    
    if ( ((body_coords.bottom - viewport) > 150) && !form.classList.contains('subscribe-hide') ) {
      form.classList.remove('subscribe-show');
      form.classList.add('subscribe-hide');
    }
    
  }, 100);
}


// ADDING ONSCROLL HANDLER--------------------------------------------------------------------
window.addEventListener('scroll', handleScroll);


// HANDLIGN VIDEO SECTION--------------------------------------------------------------------
var video_btn = document.querySelector('.video-btn');
var video_overlay = document.querySelector('.video-overlay');
video_overlay.classList.remove('hide-overlay');
var video = document.querySelector('.video iframe');

video_btn.addEventListener('click', function(e) {
  e.preventDefault();
  
  video_overlay.classList.add('hide-overlay');
  video.src += '?autoplay=1';
});