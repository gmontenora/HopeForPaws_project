
"use strict";

/*
   Author: Lauren Chavanne & Guy Montenora
   
   Date: 1/15/2019
   
   Filename: hfp_forms.js
  
   Alert box displayed when form is submitted.
             
            
*/
window.onload = setForm;
function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thank you for submitting your information !");
      return false;
   }
}



