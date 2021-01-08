/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores =[0,0];
let roundScores =0;
let activePlayer = 1;

start();

$D(".btn-roll").addEventListener("click",()=>{
    $D(".btn-roll").disabled = true;
    $D(".dice").style.display = "block";
    let  dice = 0;

 let startDice =   setInterval(function () {
        let RandomDice =Math.floor(Math.random()*6) + 1;
        $D(".dice").src =`dice-${RandomDice}.png`;
        dice = RandomDice;
    },200);

    setTimeout(()=>{
        clearInterval(startDice);
        $D(".btn-roll").disabled = false;
        if(dice > 1){
            roundScores += dice;

            $D(`#current-${activePlayer}`).textContent = roundScores;
        }else{
           nextPlayer();
        }
    },2000)
});
$D(".btn-hold").addEventListener("click",()=>{
    scores[activePlayer] += roundScores;
    $D(`#score-${activePlayer}`).textContent =  scores[activePlayer];
    if(scores[activePlayer] >= 5){
        winner();
    }else {
        nextPlayer();
    }
})
$D(".btn-new").addEventListener("click",start)