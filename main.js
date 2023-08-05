let testimonialIndex = 0;
showTestimonial();

function showTestimonial() {
   let testimonials = document.getElementsByClassName("testimonials");
   for (let i = 0; i < testimonials.length; i++) {
      testimonials[i].style.display = "none";
   }
   testimonialIndex++;
   if (testimonialIndex > testimonials.length) {
      testimonialIndex = 1;
   }
   testimonials[testimonialIndex - 1].style.display = "block";
   setTimeout(showTestimonial, 5000); // Change testimonial every 5 seconds
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