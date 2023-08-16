// ClassList - List of classes inside an Element
const logo = document.querySelector('.logo')
console.log(logo)

logo.classList.add('logo-classList') // Add a new class to the element
logo.classList.remove('logo') // Remove a class from the element
logo.classList.toggle('logo-classList') // It adds a new class to the element if it is not present and Removes the class if it is present
console.log(logo)
console.log(logo.classList)

// CreateElement - Creates a new element

const newElement1 = document.createElement('li'); // Creates a new element "li"
const newElement2 = document.createElement('li'); // Creates a new element "li"
const todoList = document.querySelector('.todo-list');
console.log(todoList)
newElement1.textContent = "New Todo 1"
newElement2.textContent = "New Todo 2"
// Append method
todoList.append(newElement1) // It adds the element at the end.
// Prepend method
todoList.prepend(newElement2) // It adds the element at the start.
// Remove method
const todoListItem = document.querySelector('.todo-list li'); // It removes the element that it was called for. (In this example newElement2 was removed)
todoListItem.remove()

// Before and After
todoList.before(newElement1); // It adds the element before the element
todoList.after(newElement2); // It adds the element after the element

// insertAdjacentHtml
// beforebegin - It adds the element before the element
// afterbegin - It adds the element after the element
// beforeend - It adds the element before the end of the element
// afterend - It adds the element after the end of the element
todoList.insertAdjacentHTML("beforeend", "<li>New TodoList</li>"); // It adds the "li" element just before the closing tag of UL element

// Static List vs Live List

// .getElementsByTagName, .getElementsByClassName, etc... gives us the Live List. (List of Elements which are Visible on the Web Page.)
// .querySelectorAll... gives us the Static List. (List of Elements which are there in that element and not which are added using appen, prepend, etc)


