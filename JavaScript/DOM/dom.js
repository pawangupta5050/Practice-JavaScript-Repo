const navItems = ["Logo", "Home", "About us", "Services", "Contact Us"]
const idElement = document.getElementById("id") // Fetching the element through ID
const classElement = document.getElementByClassName("class") // Fetching the element through Class
const allClass = document.getElementsByClassName("allClasses") // Fetching all the elements of same class name
const tagName = document.getElementByTagName("li") // Fetching 1st element of the same TagName 
const allTags = document.getElementsByTagName("li") // Fetching all the elements of the same TagName

const block = document.querySelector('.main')
console.log(block)
const blocks = 1;

const nav = document.querySelector('#nav')

// nav.innerHTML = "<div>Hello</div>"

navItems.map((e) => {
    console.log(e)
    nav.innerHTML += `<div><a >${e}</a></div>`
})

for (i = 1; i <= blocks; i++) {
    block.innerHTML += `<div>${i}</div>`
} 

// console.log(blocks)

console.log(block)

console.log(nav)

