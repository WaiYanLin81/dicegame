
function $D(select) {
    return document.querySelector(select);
}
function  start() {
    scores =[0,0];
    roundScores =0;
    $D(".dice").style.display = "none";
    $D("#current-0").textContent = 0;
    $D("#current-1").textContent = 0;
    $D("#score-0").textContent = 0;
    $D("#score-1").textContent = 0;
    $D(`#name-${activePlayer}`).textContent = `Player ${activePlayer + 1 }`;
    $D(`#name-${activePlayer}`).parentElement.classList.remove("active");
    $D(`#name-${activePlayer}`).parentElement.classList.remove("winner");
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    $D(`#name-${activePlayer}`).parentElement.classList.add("active");

}
function nextPlayer() {
    $D(".dice").style.display = "none";
    $D(`.player-${activePlayer}-panel`).classList.remove("active");
    $D(`#current-${activePlayer}`).textContent = 0;
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    $D(`.player-${activePlayer}-panel`).classList.add("active")
    roundScores = 0;
}
function winner() {
    $D(`#name-${activePlayer}`).textContent ="Winner !";
    $D(`#name-${activePlayer}`).parentElement.classList.add("winner");
    $D(`#name-${activePlayer}`).parentElement.classList.remove("active")
}