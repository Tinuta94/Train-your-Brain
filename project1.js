//let playerOne;
//document.getElementById('sub').addEventListener('click', function(event) {
//let playerName = document.querySelector('#name')
document.getElementById('g1').addEventListener('click', () => gOne())
const gOne = function () {
    console.log('changing this')
    firstBoxCreator("who is the president?")
    secondBoxCreator("a,b,c")
}
const firstBoxCreator = function (question, a, b, c) {

    let firstBox = document.createElement('div')
    firstBox.innerHTML = question
    document.body.append(firstBox)
    firstBox.setAttribute("id", "question");
}
const secondBoxCreator = function (answer, answer1, answer2, answe3) {
    let secondBox = document.createElement('div')
    secondBox.innerHTML = answer
    document.body.append(secondBox)
    secondBox.setAttribute("id", "answer")
    let buttonOne = document.createElement('button')
    buttonOne.innerHTML = 'button1'
    secondBox.appendChild(buttonOne)
}



