// Events - Any actions that are performed on the element.
// Example: click, mouseover, etc.

// Event Object - The information about the event being performed in form of Onject.

// Target - The element which have performed the action.

// Current Target - The element which the event Listener is attached to.

const buttonElement = document.querySelector('.btn');

buttonElement.addEventListener('click', (e) => {  // "e" ---> Event Object
    console.log(e); // Here it will return the Object which will have the information about the event.
    console.log(e.target); // Here it will return the element which have performed the action.
    console.log(e.currentTarget) // Here it will return the element which has got the event listener
});