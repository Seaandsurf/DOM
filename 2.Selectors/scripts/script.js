





// Add a title attribute to every element that has the important class
let importantElements = document.querySelectorAll('.important');
importantElements.forEach(element => {
  element.setAttribute('title', 'This is an important item');
});

// Select all the img tags and hide them if they have no important class
let imgTags = document.querySelectorAll('img:not(.important)');
imgTags.forEach(img => {
  img.style.display = 'none';
});

// Loop through all the paragraphs and display their content in the console
// If the paragraph has a class, display its classname as well
let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
  console.log(paragraph.textContent);
  if (paragraph.classList.length > 0) {
    console.log('Classname:', paragraph.classList[0]);
  }


   if (!paragraph.classList.length) {
    let randomColor = () => Math.floor(Math.random() * 256);
   paragraph.style.color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  }
});