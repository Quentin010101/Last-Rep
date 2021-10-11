//--------------------------------------------
//   Burger
//--------------------------------------------

const nav = document.querySelector('nav')
const ul = document.querySelector('nav ul')
const burger = document.querySelector('.burger-image')


burger.addEventListener(function(){
    nav.classList.add('burger-action')
})

// window.addEventListener('resize', function(){
//     if(window.matchMedia("(max-width:1000px)").matches){
//         nav.classList.add('nav-burger')
//         ul.classList.add('ul-burger')
//     }
// })