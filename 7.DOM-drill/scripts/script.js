// // Use [childNodes] to list all the children from the `<ul>`-----
// const ul = document.querySelector('ul');
// const children = ul.childNodes;

// // Write a for loop to iterate over every child------------------
// for (let i = 0; i < children.length; i++) {
//     if (children[i].nodeType === 1) {
//         if (children.textcontent === "Fast and Furious") {
//             if (i !== 0) {
//                 children.insertBefore(children[5], children.firstChild);
//             }
//         }
//     }

// }

    // Use childNodes to list all the children from the <ul>
    let ul = document.querySelector('ul');
    let children = ul.childNodes;
  
    // Write a for loop to iterate over every child.
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
  
      // Use a condition to only iterate over element nodes
      if (child.nodeType === 1) {
        // Find the element that contains "Fast and Furious"
        if (child.textContent.trim() === "Fast and Furious") {
          // If it's not the first element, move it to the top of the list
          if (i !== 0) {
            ul.insertBefore(child, ul.firstChild);
          }
  
          // Add a class .important to the element
          child.classList.add('important');
        }
  
        // Add an eventListener on every item of the list
        child.addEventListener('click', function () {
          // Display an alert with the name of the clicked element
          if (this.textContent.trim() === "Fast and Furious") {
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
          } else {
            alert(this.textContent.trim());
          }
        });
      }
    }
  
    // (*) Remove duplicates
    let uniqueFranchises = Array.from(new Set(Array.from(ul.children).map(child => child.textContent.trim())));
    ul.innerHTML = '';
    uniqueFranchises.forEach(function (franchise) {
      let li = document.createElement('li');
      li.textContent = franchise;
      ul.appendChild(li);
    });
  
    // (*) Add an eventListener on the document body for keyup
    document.body.addEventListener('keyup', function (event) {
      // When pressing the "r" key, sort the list in random order
      if (event.key === 'r') {
        let franchises = Array.from(ul.children);
        franchises.sort(function () {
          return 0.5 - Math.random();
        });
  
        ul.innerHTML = '';
        franchises.forEach(function (franchise) {
          ul.appendChild(franchise);
        });
      }
  
      // (*) When pressing the "d" key, clone the "Fast and Furious" element
      if (event.key === 'd') {
        let fastAndFurious = document.querySelector('.important');
        let clone = fastAndFurious.cloneNode(true);
        ul.insertBefore(clone, ul.firstChild);
      }
    });
  
    // Create a new <div> before the list
    let div = document.createElement('div');
    document.body.insertBefore(div, ul);
  
    // Using createElement, create a <select> tag into the previously created <div>
    let select = document.createElement('select');
    div.appendChild(select);
  
    // Create two <option>s in the <select>
    let option1 = document.createElement('option');
    option1.textContent = 'important franchises';
    let option2 = document.createElement('option');
    option2.textContent = 'normal franchises';
  
    select.appendChild(option1);
    select.appendChild(option2);
  
    // Add an eventListener to the <select>
    select.addEventListener('change', function () {
      // On change, if the option "important franchise" is chosen, only display items with the class .important
      let visibility = this.value === 'important franchises' ? 'visible' : 'hidden';
      Array.from(ul.children).forEach(function (franchise) {
        franchise.style.visibility = visibility;
      });
    });
 
  



















//  NOE'S CODE
// const fastAndFuriousElement = ul.childNodes[11];
// if (fastAndFuriousElement !== ul.firstElementChild) {
//     ul.insertBefore(fastAndFuriousElement, ul.firstElementChild);
// }




