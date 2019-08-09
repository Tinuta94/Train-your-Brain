$(() => {
    console.log('jquery is here!')
})
document.getElementById('sub').addEventListener('click', function(event) {
document.querySelector('#play').innerText = document.querySelector('#name').value
})
document.getElementById('g1').addEventListener('click', () => gOne())
const gOne = function () {
    valueOfg1 = parseInt(document.getElementById('g1').innerText)
    console.log(valueOfg1)
    firstBoxCreator("What are the five oceans of the world?" + "<br>" + "<br>" + "a-Arctic,Pacific,Atlantic," + "<br>" + "Southern,Indian" + "<br>" + "<br>" + "b-Pacific,Sweet,Cold," + "<br>" + "Spicy,Indian" + "<br>" + "<br>" + "c-Hostile,Chinese," + "<br>" + "Arctic,Japanese,Blue")
   secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + " or c"  + "<br>", valueOfg1, 'a') 
}

document.getElementById('g2').addEventListener('click', () => gTwo())
const gTwo = function () {
    valueOfg2 = parseInt(document.getElementById('g2').innerText)
    console.log(valueOfg2)
   
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfg2, 'b') 
}

document.getElementById('g3').addEventListener('click', () => gThree())
const gThree = function () {
    valueOfg3 = parseInt(document.getElementById('g3').innerText)
    console.log(valueOfg3)
   
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfg3, 'c') 
}
document.getElementById('m1').addEventListener('click', () => mOne())
const mOne = function () {
    valueOfm1 = parseInt(document.getElementById('m1').innerText)
    console.log(valueOfm1)
   
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfm1, 'c') 
}
document.getElementById('m2').addEventListener('click', () => mTwo())
const mTwo = function () {
    valueOfm2 = parseInt(document.getElementById('m2').innerText)
    console.log(valueOfm2)
   
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfm2, 'b') 
}
document.getElementById('m3').addEventListener('click', () => mThree())
const mThree = function () {
    valueOfm3 = parseInt(document.getElementById('m3').innerText)
    console.log(valueOfm3)
   
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfm3, 'a') 
}
document.getElementById('h1').addEventListener('click', () => hOne())
const hOne = function () {
    valueOfh1 = parseInt(document.getElementById('h1').innerText)
    console.log(valueOfh1)
   
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfh1, 'a') 
}
document.getElementById('h2').addEventListener('click', () => hTwo())
const hTwo = function () {
    valueOfh2 = parseInt(document.getElementById('h2').innerText)
    console.log(valueOfh2)
   
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfh2, 'a') 
}
document.getElementById('h3').addEventListener('click', () => hThree())
const hThree = function () {
    valueOfh3 = parseInt(document.getElementById('h3').innerText)
    console.log(valueOfh3)
   
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfh3, 'a') 
}











const firstBoxCreator = function (question) {
    let firstBox = document.createElement('div')
    firstBox.innerHTML = question
    document.body.append(firstBox)
    firstBox.setAttribute("id", "question");
}
const secondBoxCreator = function (answer, valueOfText, correctAnswer) {
    let secondBox = document.createElement('div')
    let inputBox = document.createElement('input')
    inputBox.setAttribute("id", "input1")
    let buttonOne = document.createElement('button')
    buttonOne.setAttribute("id", "buttonSecond")

    secondBox.innerHTML = answer
    document.body.append(secondBox)
    secondBox.appendChild(inputBox)
    secondBox.setAttribute("id", "answer")

    buttonOne.innerHTML = 'Submit'
    buttonOne.addEventListener('click', () => boxDisappear(valueOfText, correctAnswer))
    secondBox.appendChild(buttonOne)
}

const boxDisappear = function(val, correctAnswer) {
    inputA = document.querySelector('#input1').value
    let currentScore = parseInt(document.querySelector('#currentScore').innerText)
    if (inputA === correctAnswer) {
        console.log('true')
        console.log(val + ' is added to your score')
        newCurrentScore = currentScore + val
        document.querySelector('#currentScore').innerText = newCurrentScore
        
    } else {
       
        console.log('false')
        console.log(val + ' is subtracted from your score')
        newCurrentScore = currentScore - val
        document.querySelector('#currentScore').innerText = newCurrentScore

    }
    
    console.log('The value of the input is ' + inputA)
    $('#question').remove()
    $('#answer').remove()
    }

function hideStuff() {
    const lists = document.getElementsByClassName('list')
    console.log('lists', lists)

    for (let i = 0; i < lists.length; i++) {
        console.log(lists[i].id); //second console output
        lists[i].style.visibility = "hidden"; 
    }
 }
      
      let stuffButton = document.createElement('button')
      stuffButton.setAttribute("id", "showButton")
      stuffButton.innerHTML = 'Show lists'
      document.body.append(stuffButton)
      document.getElementById('showButton').addEventListener('click', () => showStuff())
    
let showStuff = function() {
    const lists = document.getElementsByClassName('list')
     for (let i = 0; i < lists.length; i++) {
       console.log(lists[i].id); //second console output
        lists[i].style.visibility = "visible"; 
    }
}
//newCurrentScore.length = 9
//if()



