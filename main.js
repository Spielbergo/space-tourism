// Loader
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
});

// Mobile Menu Toggle 
const menuToggle = document.getElementById('menuToggle');
const menuImage = document.getElementById('menuImage');
const mainNav = document.getElementById('mainNav');

// Set Initial Menu Toggle State Tab
mainNav.classList.add("nav-closed");
mainNav.classList.add('hide');

// Toggle mobile nav
function navToggle() {
    if (mainNav.classList.contains('nav-closed') ) {
        mainNav.classList.remove('hide');
        mainNav.classList.remove('nav-closed');
        menuImage.src = 'assets/images/shared/icon-close.svg';        
    } else {        
        mainNav.classList.add('nav-closed');
        menuImage.src = 'assets/images/shared/icon-hamburger.svg';
        setTimeout(() => {
            mainNav.classList.add('hide');
          }, "400");
    }
}

// Event Listeners
menuToggle.addEventListener('click', navToggle);


  