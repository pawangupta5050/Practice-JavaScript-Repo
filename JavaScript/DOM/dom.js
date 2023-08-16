// DOM - Document Object Model
// The document object is present inside the Window object
 
const idElement = document.getElementById("main-header"); // Fetching the element through ID
const querySelection = document.querySelector('.logo'); // Fetching the selection through selectors (id, class, element, etc)
const classElement = document.getElementsByClassName('form-group'); // Fetching the elements through class names it provides an array 
// like object (HTMLCollections) which can be iterated through (For Loop, For of Loop, etc) and not with forEach method.
const tagSelector = document.getElementsByTagName('a') // Fetching the elements through tag names it provides an array like object (HTMLCollections) 
// which can be iterated through (For Loop, For of Loop, etc) and not with forEach method.
const querySelectionAll = document.querySelectorAll('.nav-item'); // Fetching all selections through selectors (id or class), it provides an array 
// like object (Nodelist) which can be iterated through (For Loop, For of Loop, forEach, etc)

const getAttributeEx = idElement.getAttribute('class') // It will return the "Class" attribute of the current element
console.log(getAttributeEx);

querySelection.setAttribute('id', 'Logo') // It will set the "Id" attribut as "Logo" 
console.log(querySelection);

idElement.style.backgroundColor = "Red"; // We can change the background color using "Style" object
 
console.log(querySelection.textContent); // In this it displays the whole Text content which is present in the element
console.log(querySelection.innerText); // It displays the Text content which is present on the webpage.

const divElement = document.getElementById('header');

console.log(divElement.innerHTML) // In this it displays the whole elements which all are present inside the div.

// Changing the inner HTML of the div 

divElement.innerHTML = "<h1>Text which is changed</h1>";
divElement.innerHTML += "<button class='btn'>Submit</button>";

console.log(querySelectionAll);