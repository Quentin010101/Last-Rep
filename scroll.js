// import {disolveShape}  from './portfolio.js'


const sectionBlanche = document.querySelector('#section-blanche')
const sectionAPropos = document.querySelector('#aPropos')
const sectionProjet = document.querySelector('#projet')
let arrSection = [sectionBlanche,sectionAPropos,sectionProjet]
window.addEventListener('wheel', function(e){
    // disolveShape()
/*    let currentPosition = document.documentElement.scrollTop
    console.log(currentPosition)
    for(let i = 0; i< arrSection.length; i++){
        if(currentPosition <= arrSection[i].offsetTop){
            if(e.deltaY > 0){
                if(i> arrSection.length - 2) {return}
                return scrollTo(0, arrSection[i + 1].offsetTop)
            } else {
                if(i==0) { return}
                return scrollTo(0, arrSection[i - 1].offsetTop)
            }
        }
    } 
*/ 




})



