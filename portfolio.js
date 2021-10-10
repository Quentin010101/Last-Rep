 document.body.style.cssText = "margin:0; padding:0;"
 // Variable

 let speed = 50
 let shapeAnimationTime = .5 // en seconde
 let shape
 let recapitulatifChildren = [-10] // (valeur random)
 let wheelIndex = 0;
 let arrStockage = []
 let arrFall = []
 let weirdIndex = 1
 let zi = 1
 
 const textShapeContainer = document.createElement('div')
 const textShape = document.createElement('p')
 // ----------------------------------------------------------------------------
 // creation grille
 // ----------------------------------------------------------------------------
 const gridColumn = 18
 const gridRow = 9
 const gridZIndex = 0
 const grid = document.querySelector('#grid')
 grid.style.cssText = "z-index: " + gridZIndex + "; overflow: hidden; position: fixed; display: grid; grid-template-columns: repeat("+ gridColumn +", 1fr); grid-template-rows: repeat("+  gridRow +", 1fr); width: 100%; height: 100vh; background: rgba(0,0,0,0.6)"
 document.body.appendChild(grid)

// ----------------------------------------------------------------------------
// creation des shapes
// ----------------------------------------------------------------------------
function generateShape(){
    for(let i = 0; i< gridColumn; i++){
        for(let j = 0; j< gridRow; j++){
            shape = document.createElement('div')
            let background_boxShadow = "background-color: rgba(0,0,0,0.9); background: linear-gradient(45deg ,rgba(0, 0, 0, 0.6),rgba(255, 255, 255, 0)); box-shadow: 0.2em 0.2em 0.5em rgba(58, 132, 215, 0.4)"
            shape.style.cssText = "position: relative; transform:skewX(15deg); width: 90%; height: 90%; " + background_boxShadow +"; grid-area: " + (j+1) + "/" + (i+1) + "/" + (j+2) + "/" + (i+2) + ";" 
            grid.appendChild(shape)
        }
    }
}
generateShape()
function generateSpecialShape (){
    if(recapitulatifChildren.length > gridColumn*gridRow){
       return clearInterval(intervaleSpecial)
    }
    let specialShapeNumber = 1
    do{
        specialShapeNumber = Math.floor(Math.random()*gridColumn*gridRow)
    }while(recapitulatifChildren.indexOf(specialShapeNumber) !== -1)
    recapitulatifChildren.push(specialShapeNumber)
    grid.children[specialShapeNumber].style.cssText += "background-color: rgba(19, 64, 115, 0.6); background-image: linear-gradient(45deg ,rgba(0, 0, 0, 0.5),rgba(255, 255, 255, 0)); transform: skewX(15deg) scale(1.05); box-shadow: 0.2em 0.2em 0.5em rgba(9, 9, 9, 0.8)"
    grid.children[specialShapeNumber].style.transition = "all "+ shapeAnimationTime + "s"
}
let intervaleSpecial = setInterval(generateSpecialShape, speed)

// ----------------------------------------------------------------------------
// fonction pour creer et faire apparaitre nom et titre
// ----------------------------------------------------------------------------
let containerPageAcceuil = document.createElement('div')
let titre = document.createElement('h3')
let myName = document.createElement('h1')
function titrePageAcceuil(){
    // Creation Nom
    containerPageAcceuil.style.cssText = "opacity:0; position: absolute; top: 50%; left: -150%; z-index: 1; transform: translateX(-50%) translateY(-50%);"
    grid.appendChild(containerPageAcceuil)
    myName.style.cssText = "color: var(--headerColor); font-size: 3.5em; font-family: 'Lobster'; letter-spacing: 0.2em;"
    myName.innerText = "Quentin Cozic" 
    containerPageAcceuil.appendChild(myName)
    // Creation Titre  
    titre.style.cssText = "color: var(--headerColor); font-size: 2em; cursor: pointer;"
    titre.innerText = "En formation Développeur Web"
    containerPageAcceuil.appendChild(titre)  
   setTimeout(function(){  
       titrePageAcceuil_moveLeft(50, 0.8)     
   },1000)
}
function titrePageAcceuil_moveLeft(coordonneX, timeParm){
    containerPageAcceuil.style.left = coordonneX +"%"
    containerPageAcceuil.style.opacity = "0.9"
    containerPageAcceuil.style.transition = "all "+ timeParm +"s ease-in"
}
titrePageAcceuil()

// ----------------------------------------------------------------------------
// fonctions pour faire disparaitre les shapes lors du scroll
// ----------------------------------------------------------------------------
function disolveShape(parm1){
    arrFall = [parm1,1,2,0,4,6,7,8,9,10,16,17,18,19,27,36,45,54,63,72,90]
    arrStockage = [parm1,1,2,0,4,6,7,8,9,10,16,17,18,19,27,36,45,54,63,72,90]
    let nombreEnfant = grid.children.length - (arrStockage.length + 1)
    let k = 1
    for(let i = 0; i < nombreEnfant; i++){
        do{
            k = Math.floor(Math.random()*(grid.children.length - 1))
        }while(arrStockage.indexOf(k) !== -1)       
        arrStockage.push(k)
        test(k)     
    }
}
function test(parm){
    clearInterval(intervaleSpecial)
    let time = Math.floor(Math.random()*1500)
    setTimeout(function(){
        grid.children[parm].style.transform = "skewX(15deg) scale(0) translateX(15vw)"
        grid.children[parm].style.transition = "transform 1s ease-out"
    }, time)
} 
// ----------------------------------------------------------------------------
// fonction pour agrandire une shape lors du scroll   
// ----------------------------------------------------------------------------  
function findRandomShape(){
    return 76
} 
function shapeEnlargeRandomShape(parm1){
    grid.children[parm1].style.cssText += "width: " + grid.offsetWidth/1.5 + "px; height: " + grid.offsetHeight/1.6 + "px; position: absolute; top: -225%; left: -450%; z-index: -1; background-color: rgba(19, 64, 115, 0.6); background-image: linear-gradient(45deg ,rgba(0, 0, 0, 0.5),rgba(255, 255, 255, 0)); box-shadow: 0.1em 0.1em 0.05em  rgba(0, 0, 0, 0.4);"
    grid.children[parm1].style.transform = "skewX(15deg)"
    grid.children[parm1].style.transition = "all 1s ease-in"
}

// ----------------------------------------------------------------------------
// fonction apparition text interieur shape 
// ---------------------------------------------------------------------------- 
function textApparition(parm1){
        textShape.innerText = "Actuellement en formation "
        textShapeContainer.style.cssText = "height: 95%; width: 95%; background: rgba(255, 255, 255, 0.1); position: absolute; left: 300%; top: 2.5%; opacity:0;box-shadow: 0.01em 0.01em 0.05em  rgba(200, 200, 200, 0.6);"
        textShape.style.cssText = "font-size: 1rem; transform: skew(-15deg);"
        textShapeContainer.appendChild(textShape)
        grid.children[parm1].appendChild(textShapeContainer)
    setTimeout(function(){
        textShapeContainer.style.left= "2.5%" 
        textShapeContainer.style.opacity= "1"
        textShapeContainer.style.transition = "all 0.8s"
    },2000)
}
function textDisparition(){
    setTimeout(function(){
        textShapeContainer.style.left= "300%" 
        textShapeContainer.style.opacity= "1"
        textShapeContainer.style.transition = "all 0.8s"
    },500)
}
// ---------------------------------------------------------------------------- 
// fonction shape fall
// ---------------------------------------------------------------------------- 
function shapeFall(){
    for(let i = 0; i< arrFall.length - 1; i++){
        let speedFall = Math.floor(Math.random()*1000 +200)
        setTimeout(function(){
        let timeFall = Math.floor(Math.random()*3 + 1)
        grid.children[arrFall[i+1]].style.transform = "translateY(800px) scale(0.8)"
        grid.children[arrFall[i+1]].style.transition = "transform " + timeFall + "s ease-in"
        },speedFall)
    }
}
function shapeNextEnlargement(parm1){
        grid.children[parm1].style.cssText = "z-index:-1; width: " + grid.offsetWidth/1.5 + "px; height: " + grid.offsetHeight/1.6 + "px; position: absolute; top: -225%; left: -450%; z-index: -1; background-color: rgba(19, 64, 115, 0.6); background-image: linear-gradient(45deg ,rgba(0, 0, 0, 0.5),rgba(255, 255, 255, 0)); box-shadow: 0.1em 0.1em 0.05em  rgba(0, 0, 0, 0.4);"
        grid.children[parm1].style.transform = "skewX(0deg); "
        grid.children[parm1].style.transition = "all 1s"
}
// ---------------------------------------------------------------------------- 
// restart
// ---------------------------------------------------------------------------- 
function restart(){
    let k = grid.children.length
    for(let i = 0; i < k + weirdIndex; i++){
        grid.firstChild.remove()
    }
    weirdIndex = 0
    generateShape()
    recapitulatifChildren = [-10]
    generateSpecialShape()
    intervaleSpecial = setInterval(generateSpecialShape, speed)
    titrePageAcceuil()
}
// ---------------------------------------------------------------------------- 
// projet
// ---------------------------------------------------------------------------- 
const projetContainer = document.createElement('div')

let nbrProjet = 3
let projetMargin = 5
function addProjet(parm){
    projetContainer.style.cssText = "width: " + 100*nbrProjet + "%; height: 95%; background: red; position: absolute; top: 2.5%; display: flex; align-items: center;"
    for(let i = 0; i< nbrProjet; i++){
        const projet = document.createElement('div')
        const containerImage = document.createElement('div')
        const containerText = document.createElement('div')
        containerImage.style.cssText = "height: 95%; width: 30%; background: white;"
        containerText.style.cssText = "height: 95%; width: 30%; background: white;"
        projet.appendChild(containerImage)
        projet.appendChild(containerText)
        projet.style.cssText = "width: "+ ((100/nbrProjet)) +"%; height: 80%; background: blue; display: flex; align-items: center; justify-content: space-evenly;"
        projetContainer.appendChild(projet)
    }
    const button1 = document.createElement('button')
    button1.style.cssText = "position: absolute; left: 10%; z-index: 1"
    grid.children[parm].appendChild(button1)
    grid.children[parm].appendChild(projetContainer)
}
// ---------------------------------------------------------------------------- 
// wheel
// ---------------------------------------------------------------------------- 
function index(parm){
    
    if(parm.deltaY > 0){
        if(wheelIndex == -1){return wheelIndex = 1}
        return wheelIndex +=1
    } else if (parm.deltaY < 0){
         if(wheelIndex >= 0){return wheelIndex -=1} else{wheelIndex = -1}
    }
}
window.addEventListener('wheel', function(e){
    console.log("zi " + zi)
    if(zi ==! 1){return}
    zi = 0
    setTimeout(() => {
        return zi = 1
    }, 2000);
    index(e)
    console.log(wheelIndex)
    if(wheelIndex == 0){
        restart()

    }
    if(wheelIndex == 1){
        let number = findRandomShape()
        disolveShape(number)
        setTimeout(function(){shapeEnlargeRandomShape(number)}, 1500)
        setTimeout(function(){titrePageAcceuil_moveLeft(-50, 1)}, 800)
        setTimeout(function(){textApparition(number,0)}, 100)
        
    }
    if(wheelIndex == 2){
        let number = findRandomShape()
        textDisparition()
        shapeFall()
        shapeNextEnlargement(number)
        //addProjet(number)
    }
})