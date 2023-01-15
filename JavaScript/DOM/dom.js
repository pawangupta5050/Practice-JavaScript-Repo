// getElementById - Get any element through ID
const navItems = ["Logo", "Home", "About us", "Services", "Contact Us"]
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

