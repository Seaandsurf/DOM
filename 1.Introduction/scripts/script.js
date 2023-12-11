// 1. 
console.log(document.title);

// 2.
document.title = "Modifying the DOM";

// 3.
document.body.style.backgroundColor = "#FF69B4";

// 3. Extra Challenge
function getRandomColor() {
  let randomColor = () => Math.floor(Math.random() * 256); // 256 = nbr de couleurs en RGB
  return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}
document.body.style.backgroundColor = getRandomColor();

// 4.
let secondChild = document.body.children[1];

for (let child of secondChild.children) {
  console.log(child);
}
