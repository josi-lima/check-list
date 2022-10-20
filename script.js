/*
  The following is a common layout you would see in an email client.
  When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down or up, all the checkboxes in-between those two checkboxes should be checked. 
*/

// Variable to access the checkboxes

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// Variable to store the last checked box

let lastChecked;

// Function for the click event handling
// Check for the shift key down 
// AND make sure they are checking it, not unchecking

function handleCheck(e) {
  let inBetween = false; // flag variable to verify the checkboxes checked between the first and the last box; 

  if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked && lastChecked.checked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this; 
  // this = in the context of the function, it refers to the checkbox we are currently checking
  // lastChecked = here it refers to the first one we checked
}

// Loop event to go over every single checkbox
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
