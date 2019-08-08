
document.getElementById('sub').addEventListener('click', function(event) {
document.querySelector('#play').innerText = document.querySelector('#name').value
})
document.getElementById('g1').addEventListener('click', () => gOne())
const gOne = function () {
    console.log('changing this')
    firstBoxCreator("Beverly Hills is a suburb of which U.S. city??" + "<br>" + "<br>" +"a:San Francisco" + "<br>" + "<br>" + "b:Los Angeles" + "<br>" + "<br>" + "c:San Diego") 

    //secondBoxCreator()
}
const firstBoxCreator = function (question, a, b, c) {
    let firstBox = document.createElement('div')
    firstBox.innerHTML = question
    document.body.append(firstBox)
    firstBox.setAttribute("id", "question");
}
const secondBoxCreator = function (answer) {
    let secondBox = document.createElement('div')
    let inputBox = document.createElement('input')
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
    //document.getElementById("question").style.visibility = "hidden"; 
    firstBoxCreator.getElementById("question").remove()
    secondBoxCreator.getElementById("answer").remove()

}



