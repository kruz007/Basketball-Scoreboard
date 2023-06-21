let homeButton1 = document.getElementById('home-button-1')
let homeButton2 = document.getElementById('home-button-2')
let homeButton3 = document.getElementById('home-button-3')
let homeScore = document.querySelector('.home-score')
let guestScore = document.querySelector('.guest-score')
let guestButton1 = document.getElementById('guest-button-1')
let guestButton2 = document.getElementById('guest-button-2')
let guestButton3 = document.getElementById('guest-button-3')
let newGameButton = document.getElementById('new-game-button')
let determinant = 0;
let determinantB = 0;

let homePlus1 = () => {
    determinant++;
    homeScore.innerText = determinant
}
homeButton1.addEventListener('click', homePlus1)

let homePlus2 = () => {
    determinant += 2
    homeScore.innerText = determinant
}
homeButton2.addEventListener('click', homePlus2)

let homePlus3 = () => {
    determinant += 3
    homeScore.innerText = determinant
}
homeButton3.addEventListener('click', homePlus3)





let guestPlus1 = () => {
    determinantB++;
    guestScore.innerText = determinantB
}
guestButton1.addEventListener('click', guestPlus1)

let guestPlus2 = () => {
    determinantB += 2
    guestScore.innerText = determinantB}
guestButton2.addEventListener('click', guestPlus2)

let guestPlus3 = () => {
    determinantB += 3
    guestScore.innerText = determinantB}
guestButton3.addEventListener('click', guestPlus3)




let reset = () => {
    determinant = 0
    determinantB = 0
    homeScore.innerText = determinant
    guestScore.innerText = determinantB
}
newGameButton.addEventListener('click', reset)