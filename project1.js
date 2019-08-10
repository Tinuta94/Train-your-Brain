
document.getElementById('sub').addEventListener('click', function(event) {
document.querySelector('#play').innerText = document.querySelector('#name').value
})
/*
let questions = [
    { 
        question: "What are the five oceans of the world?" + "<br>" + "<br>" + "a-Arctic,Pacific,Atlantic," + "<br>" + "Southern,Indian" + "<br>" + "<br>" + "b-Pacific,Sweet,Cold," + "<br>" + "Spicy,Indian" + "<br>" + "<br>" + "c-Hostile,Chinese," + "<br>" + "Arctic,Japanese,Blue",
        correctAnswer: "a"
    }
    {
        question: "Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego"
        correctAnswer: "b"
    }
    {
        question: "What is the highest mountain in North America?" + "<br>" + "<br>" + "a-Mount Logan" + "<b>" + "Denali" + "<br" + "Mount Saint Elias"
        correctAnswer: "b"
    }
]

for(let i = 0; i < 3; i++) {
    document.getElementById(`g${i}`).addEventListener('click', function (event) {
        valueOfg1 = parseInt(event.target.innerHTML)
        event.target.style.visibility = "hidden"
        console.log(valueOfg1)
        firstBoxCreator(questions[i].question)
        secondBoxCreator()

        //firstBoxCreator("What are the five oceans of the world?" + "<br>" + "<br>" + "a-Arctic,Pacific,Atlantic," + "<br>" + "Southern,Indian" + "<br>" + "<br>" + "b-Pacific,Sweet,Cold," + "<br>" + "Spicy,Indian" + "<br>" + "<br>" + "c-Hostile,Chinese," + "<br>" + "Arctic,Japanese,Blue")
       secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + " or c"  + "<br>", valueOfg1, questions[i].correctAnswer) 
    })
}
*/

document.getElementById('g1').addEventListener('click', () => gOne())
const gOne = function () {
    valueOfg1 = parseInt(document.getElementById('g1').innerHTML)
    console.log(valueOfg1)
    document.getElementById('g1').style.visibility="hidden"
    firstBoxCreator("What are the five oceans of the world?" + "<br>" + "<br>" + "a-Arctic,Pacific,Atlantic," + "<br>" + "Southern,Indian" + "<br>" + "<br>" + "b-Pacific,Sweet,Cold," + "<br>" + "Spicy,Indian" + "<br>" + "<br>" + "c-Hostile,Chinese," + "<br>" + "Arctic,Japanese,Blue")
   secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + " or c"  + "<br>", valueOfg1, 'a') 
}

document.getElementById('g2').addEventListener('click', () => gTwo())
const gTwo = function () {
    valueOfg2 = parseInt(document.getElementById('g2').innerText)
    console.log(valueOfg2)
    document.getElementById('g2').style.visibility="hidden"
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfg2, 'b') 
}

document.getElementById('g3').addEventListener('click', () => gThree())
const gThree = function () {
    valueOfg3 = parseInt(document.getElementById('g3').innerText)
    console.log(valueOfg3)
    document.getElementById('g3').style.visibility="hidden"
    firstBoxCreator("<br>" + "What is the highest mountain in North America?" + "<br>" + "<br>" + "a-Mount Logan" + "<br>" + "<br>" + "b-Denali" + "<br>" +"<br>" + "c-Mount Saint Elias") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfg3, 'b') 
}
document.getElementById('m1').addEventListener('click', () => mOne())
const mOne = function () {
    valueOfm1 = parseInt(document.getElementById('m1').innerText)
    console.log(valueOfm1)
    document.getElementById('m1').style.visibility="hidden"
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfm1, 'c') 
}
document.getElementById('m2').addEventListener('click', () => mTwo())
const mTwo = function () {
    valueOfm2 = parseInt(document.getElementById('m2').innerText)
    console.log(valueOfm2)
    document.getElementById('m2').style.visibility="hidden"
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfm2, 'b') 
}
document.getElementById('m3').addEventListener('click', () => mThree())
const mThree = function () {
    valueOfm3 = parseInt(document.getElementById('m3').innerText)
    console.log(valueOfm3)
    document.getElementById('m3').style.visibility="hidden"
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfm3, 'a') 
}
document.getElementById('h1').addEventListener('click', () => hOne())
const hOne = function () {
    valueOfh1 = parseInt(document.getElementById('h1').innerText)
    console.log(valueOfh1)
    document.getElementById('h1').style.visibility="hidden"
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfh1, 'a') 
}
document.getElementById('h2').addEventListener('click', () => hTwo())
const hTwo = function () {
    valueOfh2 = parseInt(document.getElementById('h2').innerText)
    console.log(valueOfh2)
    document.getElementById('h2').style.visibility="hidden"
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 
    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "Type a,b" + " " + "or c" + "<br>", valueOfh2, 'a') 
}
document.getElementById('h3').addEventListener('click', () => hThree())
const hThree = function () {
    valueOfh3 = parseInt(document.getElementById('h3').innerText)
    console.log(valueOfh3)
    document.getElementById('h3').style.visibility="hidden"
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
      
      document.getElementById('sl').addEventListener('click', () => showStuff())
    
let showStuff = function() {
    const lists = document.getElementsByClassName('list')
     for (let i = 0; i < lists.length; i++) {
       console.log(lists[i].id); //second console output
        lists[i].style.visibility = "visible"; 
    }
}

function hidebox() {
   //let fBox = document.getElementById('g1')
    //fBox.style.visibility="hidden"
}

document.getElementById('gameover').addEventListener('click', function(event) {
let totalScore = document.querySelector('#currentScore').innerText = newCurrentScore
if (totalScore >= 500) {
    document.getElementById("txtgm").style.display = "block"
} else {
  document.getElementById("egame").style.display = "block"
}
})
