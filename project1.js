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
    let inputBox = document.createElement('input')
    let buttonOne = document.createElement('button')

    secondBox.innerHTML = answer
    document.body.append(secondBox)
    secondBox.appendChild(inputBox)
    secondBox.setAttribute("id", "answer")

    buttonOne.innerHTML = 'button1'
    buttonOne.addEventListener('click', () => boxDisappear())
    secondBox.appendChild(buttonOne)
}

const boxDisappear = function() {
    console.log('hi')
    document.getElementById('question').remove()
    document.getElementById('answer').remove()

}



