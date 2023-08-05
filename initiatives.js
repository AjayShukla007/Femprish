// Load page content using fetch
async function loadPage(pageName) {
   console.log('%c Loading next page', 'color: blue;');

   /*try {
      const response = await fetch(`${pageName}.html`);
      const content = await response.text();
      document.querySelector('body').innerHTML = content;
   } catch (error) {
      console.error('Error loading page:', error);
   }*/
}

const space = document.querySelector('.stars');
// const form = document.querySelector('form');
const starsMax = 500;

// Functions
function random(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createStar() {
   const star = document.createElement('span');
   star.classList.add('star');

   // size
   const size = star.style.width = random(2, 7) + 'px';
   star.style.width = size;
   star.style.height = size;

   // positon
   star.style.top = random(2, 98) + '%';
   star.style.left = random(2, 98) + '%';

   // glow
   const glow = random(3, 5);
   star.style.boxShadow = '0px 0px ' + glow + 'px ' + glow / 1.6 + 'px   rgba(255, 255, 255, 0.3)';

   // animation
   star.style.animationDuration = random(3000, 5000) + 'ms';

   space.appendChild(star);
}

function populateSpace(nbr) {
   for (var i = 0; i < nbr; i++) {
      createStar();
   }
}

// Events

populateSpace(200);



function showStars(e) {
   e.preventDefault();
   let starsNb = Number(this.starsNb.value);
   if (isNaN(starsNb)) return;
   if (!(starsNb >= 0) || !(starsNb <= starsMax)) return;
   if (starsNb <= 1) {
      this.submitBtn.value = 'Star';
   } else {
      this.submitBtn.value = 'Stars';
   }
   space.innerHTML = '';
   populateSpace(starsNb);
};


const card = document.querySelectorAll('.card');



$.fn.isInViewport = function() {
   var elementTop = $(this).offset().top;
   var elementBottom = elementTop + $(this).outerHeight();

   var viewportTop = $(window).scrollTop();
   var viewportBottom = viewportTop + $(window).height();

   return elementBottom > viewportTop && elementTop < viewportBottom;
};
card.forEach((c) => {
   $(window).on('resize scroll', function() {
      if ($(c).isInViewport()) {
         // do something
         c.style.opacity = 1;
         // console.log('its in viewport');
      } else {
         // do something else
         // console.log('its not in viewport');
         c.style.opacity = 0;

      }
   });
})


// Get the "Back to Top" button element
const backToTopBtn = document.getElementById('backToTopBtn');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
   if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
   } else {
      backToTopBtn.style.display = 'none';
   }
});

// Smooth scrolling function
backToTopBtn.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});