//--------------------------------------------
//   Burger
//--------------------------------------------

const nav = document.querySelector('nav')
const ul = document.querySelector('nav ul')
const burger = document.querySelector('.burger-image')
const cross = document.querySelector('.cross-image')

burger.addEventListener('click', function(){
    nav.classList.add('burger-action')
    burger.style.opacity = "0"
    burger.style.transition = "opacity 0.4s"
})
cross.addEventListener('click', function(){
    nav.classList.remove('burger-action')
    burger.style.opacity = "1"
    burger.style.transition = "opacity 0.4s"
})

// window.addEventListener('resize', function(){
//     if(window.matchMedia("(max-width:1000px)").matches){
//         nav.classList.add('nav-burger')
//         ul.classList.add('ul-burger')
//     }
// })