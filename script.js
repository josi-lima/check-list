/*
  When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down or up, all the checkboxes in-between those two checkboxes should be    checked. This is a common layout you would see in an email client.
*/

// =========== Variables to access the elements =================================
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

const btn = document.querySelector('#btn-result');

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
  imgA.setAttribute('class', 'img');   // imgA.classList.add('img');
  imgA.style.marginTop = '10vmin';
   
  const resultA = document.getElementById('result-a');
  resultA.style.marginBottom = '-6vmin';
  resultA.textContent = "Uau! Voc?? realmente sabe como economizar e investir seu dinheiro! Seus h??bitos combinam com todas as habilidades positivas de uma excelente gest??o financeira!";
}
    
// ========== Function to set up the second result ===========================

const secondResult = () => {
  const imgB = document.querySelector('#img02');
  imgB.setAttribute('src', 'images/quiz-02.png');
  imgB.setAttribute('class', 'img');
  imgB.style.marginTop = '1vmin';
     
  const resultB = document.getElementById('result-b');
  resultB.textContent = "Ok, voc?? gosta de gastar seu dinheiro, mas na maioria das vezes voc?? tamb??m conhece seus limites. Tenha certeza de n??o esbanjar demais e continue mantendo um bom equil??brio!";
}

// ========== Function to set up the third result ===========================

const thirdResult = () => {
  const imgC = document.querySelector('#img03');
  imgC.setAttribute('src', 'images/quiz-03.png');
  imgC.setAttribute('class', 'img');
  imgC.style.marginTop = '-4vmin';
    
  const resultC = document.getElementById('result-c');
  resultC.textContent = "Ei, l??! Voc?? adora jogar seu dinheiro pela janela! Tenha cuidado para n??o esquecer de pensar no futuro - suas necessidades s??o igualmente importantes, n??o apenas seus desejos!";
}

// =========== Event to check the results of the quiz =======================

btn.addEventListener('click', checkResults);

// =========== Function to activate the enter button to get the results of the quiz ==============

document.addEventListener("keypress", function(e) {
  if(e.key === "Enter") {
    btn.click();
  }
});




