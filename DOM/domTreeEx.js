const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes); NodeList(3) [head, text, body]
const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(headElementNode.childNodes);
// sibling relation 

const head = document.querySelector("head");
console.log(head);
const title = head.querySelector("title");
console.log(title.childNodes);
const container = document.querySelector(".container");
console.log(container.children);

// Accessing the parent element and Changing the Background Colour
const headingTag = document.getElementById('heading');
console.log(headingTag)
const parentNode = headingTag.parentNode

parentNode.style.backgroundColor = "Blue"

console.log(parentNode)