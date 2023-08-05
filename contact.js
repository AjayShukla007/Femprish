document.addEventListener('DOMContentLoaded', function() {
   // Attach submit event listener to the contact form
   const contactForm = document.getElementById('contactForm');
   contactForm.addEventListener('submit', handleSubmit);
   
   const inputFields = document.querySelectorAll('.form-control');
   
   const name = document.getElementById('name');
   const forName = document.getElementById('forName');
   const email = document.getElementById('email');
   const forEmail = document.getElementById('forEmail');
   const message = document.getElementById('message');
   const forMsg = document.getElementById('forMsg');
   
   name.addEventListener('focus',()=>{
      forName.style.cssText = `
      color: red;
      transform: scale(1.03);
      `;
   })
   name.addEventListener('blur',()=>{
      forName.style.cssText = `
      color: black;
      transform: scale(1);
      `;
   })
   email.addEventListener('mouseenter',()=>{
      forEmail.style.cssText = `
      color: red;
      transform: scale(1.03);
      `;
   })
   email.addEventListener('mouseleave',()=>{
      forEmail.style.cssText = `
      color: black;
      transform: scale(1);
      `;
   })
   message.addEventListener('mouseenter',()=>{
      forMsg.style.cssText = `
      color: red;
      transform: scale(1.03);
      `;
      
   })
   message.addEventListener('mouseleave',()=>{
      forMsg.style.cssText = `
      color: black;
      transform: scale(1);
      `;
   })
   




function handleSubmit(event) {
   event.preventDefault();

   // Get form data
   const formData = new FormData(event.target);
   const nameInpArr = [];
   for(let n = 0; n<name.value.length;n++){
      console.log('is this 5 times '+nameInpArr);
      name.value.length-1;
   }
   const nameValue = name.value;
   
   // animateInputField(nameValue);
   
      showThankYouMessage();
      
   setTimeout(function() {
      // Clear the form
      event.target.reset();
      // Show thank you message
      
   }, 2000); // Simulated delay of 2 seconds
}
//dom func end here
});



function showThankYouMessage() {
   const thankYouMessage = document.createElement('div');
   thankYouMessage.className = 'thank-you-message';
   let progress = 0;
   const progressInterval=setInterval(()=>{
     
   thankYouMessage.innerHTML = `
     <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${progress}%" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">${progress}%</div>
     Sending....
   `;
   progress+=5;
   console.log(progress);
   if (progress>100) {
      clearInterval(progressInterval);
   }
   },100)
   setTimeout(()=>{
   thankYouMessage.textContent = 'Thank you for contacting us! We will get back to you soon.  regards Team FEMPRISH ';
   },2500);
   
   document.body.appendChild(thankYouMessage);
   
   setTimeout(function() {
      thankYouMessage.remove(); // Remove the message after a delay
   }, 5000); // Display for 5 seconds
}




function animateInputField(value) {
   const inputField = document.getElementById('name');
   inputField.value = ''; // Clear the input field

   // Wrap each character in a <span> element and append to the input field
   for (let i = 0; i < value.length; i++) {
      const charSpan = document.createElement('span');
      charSpan.textContent = value[i];
      inputField.appendChild(charSpan);
   }
}