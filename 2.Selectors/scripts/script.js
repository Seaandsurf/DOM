





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


  // function getRandomColor() {
  //   let randomColor = () => Math.floor(Math.random() * 256); // 256 = nbr de couleurs en RGB
  //   return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
  // };



   if (!paragraph.classList.length) {
    let randomColor = () => Math.floor(Math.random() * 256);
     let textColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
   paragraph.style.color = textColor;
  }






















  //   // Give each paragraph a random text color unless it has a class
  //   if (!paragraph.classList.length) {
  //     let randomColor = () => Math.floor(Math.random() * 256);
  //     let textColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  //     paragraph.style.color = textColor;
  //   }
});