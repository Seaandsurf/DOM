const ol = document.querySelector('ol');
const olLastChild = ol.children[4];
console.log(olLastChild);

const sections = document.querySelectorAll('section');
const a = sections[1].querySelector('h2');
const b = sections[2].querySelector('h2');
const tempText = a.textContent;
a.textContent = b.textContent;
b.textContent = tempText;

const main = document.querySelector('main');
const lastSection = main.lastElementChild;
main.removeChild(lastSection);




































// // Move the <h2> of the third section in the second one and vice-versa

// const a = sections[1].querySelector('h2');
// const b = sections[2].querySelector('h2');

// // Create a temporary element to hold the content
// const tempElement = document.createElement('div');
// tempElement.innerHTML = a.innerHTML;

// // Swap the content of a and b
// a.innerHTML = b.innerHTML;
// b.innerHTML = tempElement.innerHTML;

// // Delete the last section from the DOM
//