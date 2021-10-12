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
 let indexCarrousel = 0
 let result = 0
 let arrImgProjet = ["url('./asset/img/Capture.PNG')","url('./asset/img/Capture1.PNG')","url('./asset/img/Capture2.PNG')"]
 let arrProjetTitre = ["Snake",,]
 let arrProjetText = ["Reproduction simplifié du jeu Snake à l'aide des langages CSS, HTML et Javascript",,]
 let arrLien = ["https://codepen.io/QuentinAfpa/pen/PomvEpd",,]

 // lien accueil
 const lien1 = document.querySelector('nav li:nth-child(2)')
 const lien2 = document.querySelector('nav li:nth-child(3)')
 const lien3 = document.querySelector('nav li:nth-child(4)')
 
 const textShapeContainer = document.createElement('div')
 const textShape = document.createElement('p')

 // ----------------------------------------------------------------------------
 // Media querie
 // ----------------------------------------------------------------------------
 let gridColumn = 18
 let gridRow = 9
 let arrGridNumber = [76, 91, 30]
 let indexMediaQuerie = 0
 redimenssionement()
 // ----------------------------------------------------------------------------
 // creation grille
 // ----------------------------------------------------------------------------
 const gridZIndex = 0
 const grid = document.querySelector('#grid')
 grid.style.cssText = "z-index: " + gridZIndex + "; overflow: hidden; position: fixed; display: grid; grid-template-columns: repeat("+ gridColumn +", 1fr); grid-template-rows: repeat("+  gridRow +", 1fr); width: 100%; height: 100vh; background: linear-gradient(45deg,rgba(0,0,0,0.95), rgba(0,0,0,0.85));"
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
       titrePageAcceuil_moveLeft(35, 0.8)     
   },1000)
}
function titrePageAcceuil_moveLeft(coordonneX, timeParm){
    containerPageAcceuil.style.left = coordonneX + "%"
    containerPageAcceuil.style.opacity = "0.9"
    containerPageAcceuil.style.transition = "all "+ timeParm +"s ease-in"
}
titrePageAcceuil()

// ----------------------------------------------------------------------------
// fonctions pour faire disparaitre les shapes lors du scroll
// ----------------------------------------------------------------------------
function disolveShape(parm1){
    arrFall = [parm1,1,2,0,4,6,7,8,9,10,16,17,18,19,27,36,45,54,63,72,90,160,161,152,153,154,144]
    arrStockage = [parm1,1,2,0,4,6,7,8,9,10,16,17,18,19,27,36,45,54,63,72,90,160,161,152,153,154,144]
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
    return arrGridNumber[indexMediaQuerie]
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
    // setTimeout(function(){
        textShapeContainer.style.left= "300%" 
        textShapeContainer.style.opacity= "1"
        textShapeContainer.style.transition = "all 0.8s"
    // },500)
}
// ---------------------------------------------------------------------------- 
// fonction shape fall
// ---------------------------------------------------------------------------- 
function shapeFall(){
    for(let i = 0; i< arrFall.length - 1; i++){
        let speedFall = Math.floor(Math.random()*1000 +200)
        setTimeout(function(){
        let timeFall = Math.floor(Math.random()*3 + 1)
        grid.children[arrFall[i+1]].style.transform = "translateY(1800px) scale(0.8)"
        grid.children[arrFall[i+1]].style.transition = "transform " + timeFall + "s ease-in"
        },speedFall)
    }
}
function shapeNextEnlargement(parm1){
        grid.children[parm1].style.cssText += "z-index:-1; width: " + grid.offsetWidth + "px; height: " + grid.offsetHeight/1.6 + "px; position: absolute; transform: skewX(0deg) !important; top: -250%; left: -800%; z-index: -1; background-color: rgba(19, 64, 115, 0.6); background-image: linear-gradient(45deg ,rgba(0, 0, 0, 0.5),rgba(255, 255, 255, 0)); box-shadow: 0.1em 0.1em 0.05em  rgba(0, 0, 0, 0.4);"
        grid.children[parm1].style.transition = "all 1.5s"
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
const button1 = document.createElement('button')
let nbrProjet = 3
let projetMargin = 5
function addProjet(parm){
    removeProjet()
    projetContainer.style.cssText = "width: " + 100*nbrProjet + "%; height: 95%; position: absolute; top: 2.5%; display: flex; align-items: center;"
    for(let i = 0; i< nbrProjet; i++){
        const projet = document.createElement('div')
        const containerImage = document.createElement('a')
        containerImage.href = arrLien[i]
        containerImage.target = "_blank"
        const containerText = document.createElement('div')
        containerImage.style.cssText = "cursor:pointer; height: 95%; width: 35%; background: white; background-image: " + arrImgProjet[i] + "; background-size: cover; box-shadow: 0.4em 0.4em 0.5em rgba(0, 0, 0, 0.8); border: solid 10px rgba(0,0,20, 1);"
        containerText.style.cssText = "height: 75%; width: 35%; background: linear-gradient(45deg, rgba(220,220,220,0.6), rgba(150,150,150,0.6)); border-radius: 5px; box-shadow: 0.4em 0.4em 0.5em rgba(0, 0, 0, 0.8);  padding: 20px;"
        const textTitre = document.createElement('h2')
        textTitre.style.cssText = "font-weight: 600; font-size: 1.5em; margin-bottom: 1em;"
        textTitre.innerText = arrProjetTitre[i]
        const textDescription = document.createElement('p')
        textDescription.style.cssText = ""
        textDescription.innerText = arrProjetText[i]
        containerText.appendChild(textTitre)
        containerText.appendChild(textDescription)
        projet.appendChild(containerImage)
        projet.appendChild(containerText)
        projet.style.cssText = "width: "+ ((100/nbrProjet)) +"%; height: 80%; display: flex; align-items: center; justify-content: space-evenly;"
        projetContainer.appendChild(projet)
    }
    button1.style.cssText = "position: absolute; left: 3%; top: 50%; z-index: 10; height: 30px; width: 50px; background: rgba(220,220,220,0.9); border: none; box-shadow: 0 0 0.4em 0.1em rgba(58, 132, 215, 0.4);"
    button1.innerHTML = "Next"
    grid.children[parm].appendChild(button1)
    grid.children[parm].appendChild(projetContainer)
}
function carrousel(){
    switch(indexCarrousel){
        case 1: result = 100/nbrProjet; break;
        case 2: result = 200/nbrProjet; break;
        case 3: result = 0/nbrProjet; break;
    }
    return result
}
button1.addEventListener('click', function(){
    indexCarrousel += 1;
    if(indexCarrousel == 4){ indexCarrousel = 1 }
    projetContainer.style.transform = "translateX(-" + carrousel() + "%)"
    projetContainer.style.transition = "transform 1s"
})
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
        removeProjet()
        restart()
    }
    if(wheelIndex == 1){
        removeProjet()
        aProposDeMoi()    
    }
    if(wheelIndex == 2){
        startProjet()
    }
})
function startProjet(){
    let number = findRandomShape()
    textDisparition()
    shapeFall()
    setTimeout(function(){
        shapeNextEnlargement(number)
        setTimeout(function(){
            addProjet(number)
        }, 800)
    },800)
}
function aProposDeMoi(){
    let number = findRandomShape()
    disolveShape(number)
    setTimeout(function(){shapeEnlargeRandomShape(number)}, 500)
    setTimeout(function(){titrePageAcceuil_moveLeft(-50, 1)}, 800)
    setTimeout(function(){textApparition(number,0)}, 100)
}
function removeProjet(){
    let k = projetContainer.children.length
    for(let i = 0; i < k; i++){
        projetContainer.firstChild.remove()
    }
    button1.remove()
}
lien1.addEventListener('click', function(){
    removeProjet()
    restart()
    wheelIndex = 0
})
lien2.addEventListener('click', function(){
    removeProjet()
    aProposDeMoi()
    wheelIndex = 1
})
lien3.addEventListener('click', function(){
    let number = findRandomShape()
    disolveShape(number)
    setTimeout(function(){titrePageAcceuil_moveLeft(-50, 1)}, 800)
    startProjet()
    wheelIndex = 2
})

function redimenssionement(){
    if(window.matchMedia("(min-width: 1005px)").matches){
        gridColumn = 18
        gridRow = 9
        indexMediaQuerie = 0
    }
    if(window.matchMedia("(max-width: 1000px)").matches){
        gridColumn = 13
        gridRow = 11
        indexMediaQuerie = 1
    }
    if(window.matchMedia("(max-width: 500px)").matches){
        gridColumn = 7
        gridRow = 9
        indexMediaQuerie = 2
    }
}

