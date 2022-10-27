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
  else if (result >= 4 && result < 7) {
    return secondResult();
  } 
  else {
    return thirdResult();
  }
} 

// ========== Function to set up the first result ===========================

const firstResult = () => {
  const imgA = document.querySelector('#img01');
  imgA.setAttribute('src', 'images/quiz-01.png');
  imgA.style.width = '95%';
  imgA.style.height = '95%';
  imgA.style.marginTop = '10vmin';
  imgA.style.border = '1vmin solid #fff';
  imgA.style.borderRadius = '4.7vmax';
  
  const resultA = document.getElementById('result-a');
  resultA.style.marginBottom = '-6vmin';
  resultA.textContent = "Uau! Você realmente sabe como economizar e investir seu dinheiro! Seus hábitos combinam com todas as habilidades positivas de uma excelente gestão financeira!";
}
    
// ========== Function to set up the second result ===========================

const secondResult = () => {
  const imgB = document.querySelector('#img02');
  imgB.setAttribute('src', 'images/quiz-02.png');
  imgB.style.width = '95%';
  imgB.style.height = '95%';
  imgB.style.marginTop = '1vmin';
  imgB.style.border = '1vmin solid #fff';
  imgB.style.borderRadius = '4.7vmax';
    
  const resultB = document.getElementById('result-b');
  resultB.textContent = "Ok, você gosta de gastar seu dinheiro, mas na maioria das vezes você também conhece seus limites. Tenha certeza de não esbanjar demais e continue mantendo um bom equilíbrio!";
}

// ========== Function to set up the third result ===========================

const thirdResult = () => {
  const imgC = document.querySelector('#img03');
  imgC.setAttribute('src', 'images/quiz-03.png');
  imgC.style.width = '95%';
  imgC.style.height = '95%';
  imgC.style.marginTop = '-4vmin';
  imgC.style.border = '1vmin solid #fff';
  imgC.style.borderRadius = '4.7vmax';
  
  const resultC = document.getElementById('result-c');
  resultC.textContent = "Ei, lá! Você adora jogar seu dinheiro pela janela! Tenha cuidado para não esquecer de pensar no futuro - suas necessidades são igualmente importantes, não apenas seus desejos!";
}

// =========== Event to check the results of the quiz =======================

btn.addEventListener('click', checkResults);




