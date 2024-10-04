let homeButton1 = document.getElementById("home-button-1");
let homeButton2 = document.getElementById("home-button-2");
let homeButton3 = document.getElementById("home-button-3");
let homeScore = document.querySelector(".home-score");
let guestScore = document.querySelector(".guest-score");
let guestButton1 = document.getElementById("guest-button-1");
let guestButton2 = document.getElementById("guest-button-2");
let guestButton3 = document.getElementById("guest-button-3");
let newGameButton = document.getElementById("new-game-button");
let determinantHome = 0;
let determinantGuest = 0;

let homePlus1 = () => {
  determinantHome++;
  homeScore.innerText = determinantHome;
};
homeButton1.addEventListener("click", homePlus1);

let homePlus2 = () => {
  determinantHome += 2;
  homeScore.innerText = determinantHome;
};
homeButton2.addEventListener("click", homePlus2);

let homePlus3 = () => {
  determinantHome += 3;
  homeScore.innerText = determinantHome;
};
homeButton3.addEventListener("click", homePlus3);

let guestPlus1 = () => {
  determinantGuest++;
  guestScore.innerText = determinantGuest;
};
guestButton1.addEventListener("click", guestPlus1);

let guestPlus2 = () => {
  determinantGuest += 2;
  guestScore.innerText = determinantGuest;
};
guestButton2.addEventListener("click", guestPlus2);

let guestPlus3 = () => {
  determinantGuest += 3;
  guestScore.innerText = determinantGuest;
};
guestButton3.addEventListener("click", guestPlus3);

let reset = () => {
  determinantHome = 0;
  determinantGuest = 0;
  homeScore.innerText = determinantHome;
  guestScore.innerText = determinantGuest;
};
newGameButton.addEventListener("click", reset);
