const learners = ["Alexis", "Alexis", "Alice", "Aurelien", "Cassidy", "Damien", "Giuseppe", "Huseyin", "Jeremy", "Joshua", "Julien", "Nicolas", "Maoro", "Marvin", "Noé", "Otman", "Robin", "Tess", "Thomas", "Ugur", "Winona"];


let main = document.querySelectorAll('main')[0]
console.log(main)

learners.forEach(function (learner) {
    let student = document.createElement("section")
    student.classList.add("studentNAme");
    student.textContent = learner
    console.log(learner);
    main.appendChild(student)

                                                                                               
})

let section = "studentName"

const randomColor = '#' + Math.floor(Math.random() * 256);
section.style.backgroundcolor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()}`

// learners.forEach(function () {
//     const randomColor = Math.floor(Math.random() * 256);
//     section.style.backgroundcolor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()}`

// })


// document.addEventListener('DOMContentLoaded', function() {
//     const apprenants = ['Ugur', 'Tess', 'Mathias', 'Huseyin']; 
//     const article = document.querySelector('article');
  
//     apprenants.forEach(function(apprenant) {
//       const section = document.createElement('section');
//       const paragraph = document.createElement('p');
  
//       section.textContent = apprenant;
//       paragraph.textContent = apprenant;
  
//       const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//       section.style.backgroundColor = randomColor;
      
//       section.style.color = getContrastColor(randomColor);
  
//       article.appendChild(section);
//       section.appendChild(paragraph);
//     });
//   });
  





























//   function getContrastColor(hexColor) {
//     const hex = hexColor.replace('#', '');
//     const r = parseInt(hex.substr(0, 2), 16);
//     const g = parseInt(hex.substr(2, 2), 16);
//     const b = parseInt(hex.substr(4, 2), 16);
  
//     const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
//     return brightness >= 128 ? '#000000' : '#FFFFFF';
//   }
  