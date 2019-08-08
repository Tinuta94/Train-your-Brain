
document.getElementById('sub').addEventListener('click', function(event) {
document.querySelector('#play').innerText = document.querySelector('#name').value
})
document.getElementById('g1').addEventListener('click', () => gOne())
const gOne = function () {
    console.log('changing this')
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a-San Francisco" + "<br>" + "<br>" + "b-Los Angeles" + "<br>" + "<br>" + "c-San Diego") 

    secondBoxCreator("<br>" + "Pick the correct answer" + "<br> " + "a,b" + " " + "or c" + "<br>") 
}
const firstBoxCreator = function (question) {
    let firstBox = document.createElement('div')
    firstBox.innerHTML = question
    document.body.append(firstBox)
    firstBox.setAttribute("id", "question");
}
const secondBoxCreator = function (answer) {
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
    buttonOne.addEventListener('click', () => boxDisappear())
    secondBox.appendChild(buttonOne)
}

const boxDisappear = function() {
    console.log('hi')
    firstBox.getElementById("question").remove()
    secondBox.getElementById("answer").remove()
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



