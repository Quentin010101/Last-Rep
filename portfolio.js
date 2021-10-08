 document.body.style.cssText = "margin:0; padding:0;"
 // Variable

 var speed = 100
 let shape
 let recapitulatifChildren = [-8]
 
 // creation grille
 const gridColumn = 18
 const gridRow = 9
 const grid = document.querySelector('#grid')
 grid.style.cssText = "overflow-x: hidden; position: relative; display: grid; grid-template-columns: repeat("+ gridColumn +", 1fr); grid-template-rows: repeat("+  gridRow +", 1fr); width: 100%; height: 100vh; background: rgba(0,0,0,0.9)"
 document.body.appendChild(grid)

 // --------------------------


 for(let i = 0; i< gridColumn; i++){
     for(let j = 0; j< gridRow; j++){
         shape = document.createElement('div')
         let background_boxShadow = "background: linear-gradient(45deg ,rgba(0, 0, 0, 1),rgba(255, 255, 255, 0)); box-shadow: 0.2em 0.2em 0.5em rgba(58, 132, 215, 0.4)"
         shape.style.cssText = "transform:skewX(15deg); width: 90%; height: 90%; " + background_boxShadow +"; grid-area: " + (j+1) + "/" + (i+1) + "/" + (j+2) + "/" + (i+2) + ";" 
         grid.appendChild(shape)
     }
 }

function generateSpecialShape (){
    if(recapitulatifChildren.length > gridColumn*gridRow){
       return clearInterval(intervaleSpecial)
    }
    let specialShapeNumber = 1
    do{
        specialShapeNumber = Math.floor(Math.random()*gridColumn*gridRow)
    }while(recapitulatifChildren.indexOf(specialShapeNumber) !== -1)
    recapitulatifChildren.push(specialShapeNumber)
    grid.children[specialShapeNumber].style.cssText += "background-color: rgba(19, 64, 115, 1); background-image: linear-gradient(45deg ,rgba(0, 0, 0, 1),rgba(255, 255, 255, 0)); transform: skewX(15deg) scale(1.05); box-shadow: 0.2em 0.2em 0.5em rgba(9, 28, 50, 0.4)"
    grid.children[specialShapeNumber].style.transition = "all 4s"
}
let intervaleSpecial = setInterval(generateSpecialShape, speed)

 // Creation Nom
 const containerPageAcceuil = document.createElement('div')
 containerPageAcceuil.style.cssText = "position: absolute; top: 50%; left:50%; z-index: 1; transform: translateX(-50%) translateY(-50%);"
 grid.appendChild(containerPageAcceuil)
 const myName = document.createElement('h1')
 myName.style.cssText = "color: var(--headerColor); font-size: 3.5em; font-family: 'Lobster'; letter-spacing: 0.2em;"
 myName.innerText = "Quentin Cozic" 
 containerPageAcceuil.appendChild(myName)
 // Creation Titre
 const titre = document.createElement('h3')
 titre.style.cssText = "color: var(--headerColor); font-size: 2em;"
 titre.innerText = "En formation Développeur Web"
 containerPageAcceuil.appendChild(titre)



 // -------------- Next ----------

const sectionAPropos = document.querySelector('#aPropos')
const sectionProjet = document.querySelector('#projet')


