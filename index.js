let homeNumber = document.getElementById("home-number")
let homeScore = 0

let guessNumber = document.getElementById("guest-number")
let guessScore = 0

function increaseHome1() {
    homeScore += 1
    homeNumber.textContent = homeScore
}

function increaseHome2() {
    homeScore += 2
    homeNumber.textContent = homeScore
}

function increaseHome3() {
    homeScore += 3
    homeNumber.textContent = homeScore
}

function increaseGuest1() {
    guessScore += 1
    guessNumber.textContent = guessScore
}

function increaseGuest2() {
    guessScore += 2
    guessNumber.textContent = guessScore
}

function increaseGuest3() {
    guessScore += 3
    guessNumber.textContent = guessScore
}