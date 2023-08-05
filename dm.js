const light = document.querySelectorAll('.light');
const spaceArea = document.querySelector('.stars');
var darkSwitch = document.getElementById("darkSwitch"); 
 
 light.forEach(mode=>{

 window.addEventListener("load", function () { 
   if (darkSwitch) { 
     initTheme(); 
     darkSwitch.addEventListener("change", function () { 
       resetTheme(); 
     }); 
   } 
 }); 
    
 
 function initTheme() { 
   var darkThemeSelected = 
     localStorage.getItem("darkSwitch") !== null && 
     localStorage.getItem("darkSwitch") === "dark"; 
   darkSwitch.checked = darkThemeSelected;
   if (darkThemeSelected) {
      mode.classList.add('dark');
      spaceArea.style.backgroundColor = '#000';
   }else{
      mode.classList.remove('dark');
      spaceArea.style.backgroundColor = '#FCFBFAff';
   }
   // darkThemeSelected 
   //  ?  mode.classList.add('dark')
   //  : mode.classList.remove('dark'); 
 } 
  
 /** 
  * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled 
  * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is 
  * applied. 
  * @return {void} 
  
 */
 
 
  
 function resetTheme() { 
   if (darkSwitch.checked) { 
     
   //  document.querySelectorAll('div').setAttribute("data-theme", "dark");
   mode.classList.add('dark');
   spaceArea.style.backgroundColor = '#000';
     localStorage.setItem("darkSwitch", "dark"); 
   } else { 
      // document.querySelectorAll('div').removeAttribute("data-theme", "dark");
      spaceArea.style.backgroundColor = '#FCFBFAff';
      mode.classList.remove('dark');
     localStorage.removeItem("darkSwitch"); 
   } 
 }
 
 })