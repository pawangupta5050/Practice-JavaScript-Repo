// getElementById - Get any element through ID
const navItems = ["Logo", "Home", "About us", "Services", "Contact Us"]

const nav = document.querySelector('#nav')

nav.innerHTML = "<div>Hello</div>"

navItems.map((e) => {
    console.log(e)
    nav.innerHTML += `<div><a >${e}</a></div>`
})

console.log(nav)

