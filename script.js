/*
  The following is a common layout you would see in an email client.
  When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down or up, all the checkboxes in-between those two checkboxes should be checked. 
*/

// =========== Variable to access the checkboxes =================================
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// =========== Variable to store the last checked box ============================
let lastChecked;

// =========== Function for the checkbox click event handling =============================
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

// =========== Loop event to go over every single checkbox ============================
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

// =========== Variables to verify the number of checkboxes selected ===================
let result;
let selected = 0;

const btn = document.querySelector('#btn-result');

// =========== Function to verify how many checkboxes were selected ===================

function checkResults(e) {
  e.preventDefault();

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      result = selected += 1;
    }
  });

  // =========== Conditionals to check and pop up the results ==========================
  if (result >= 7) {
    return firstResult();    
  } 
  else if (result >= 4) {
    return secondResult();
  } 
  else {
    return thirdResult();
  }
} 

// ========== Function to set up the first result ===========================

const firstResult = () => {
  const imgA = document.querySelector('#img01');
  imgA.setAttribute('src', 'images/icon-01.png');

  const resultA = document.getElementById('result-a');
  resultA.textContent = "You're a saver rockstar!";

  const descriptionA = document.getElementById('description-a');
  descriptionA.textContent = "You're a saver rockstar!";
}    

// ========== Function to set up the second result ===========================

const secondResult = () => {
  const imgB = document.querySelector('#img02');
  imgB.setAttribute('src', 'images/icon-01.png');
  
  const resultB = document.getElementById('result-b');
  resultB.textContent = "You're on track to become a saver!";

  const descriptionB = document.getElementById('description-b');
  descriptionB.textContent = "You're on track to become a saver!";
}

// ========== Function to set up the third result ===========================

const thirdResult = () => {
  const imgC = document.querySelector('#img03');
  imgC.setAttribute('src', 'images/icon-01.png');
  
  const resultC = document.getElementById('result-c');
  resultC.textContent = "Oh, no! You're a real spender!";

  const descriptionC = document.getElementById('description-c');
  descriptionC.textContent = "Oh, no! You're a real spender!";
}

btn.addEventListener('click', checkResults);

