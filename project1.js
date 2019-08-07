//let playerOne;
//document.getElementById('sub').addEventListener('click', function(event) {
//let playerName = document.querySelector('#name')
document.getElementById('g1').addEventListener('click', ()=>gOne())
const gOne = function() {
    console.log('changing this')
let firstBox = document.createElement('div')
firstBox.innerHTML = 'text'
document.body.append(firstBox)
firstBox.setAttribute("id", "question");
let secondBox = document.createElement('div')
secondBox.innerHTML = 'text'
document.body.append(secondBox)
secondBox.setAttribute("id", "answer") 
let buttonOne = document.createElement('button')
buttonOne.innerHTML = 'button1'
secondBox.appendChild(buttonOne)
}



