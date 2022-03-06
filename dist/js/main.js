// this game is based on luck

// the function that decides who win
// first parameter is the user, second parameter is the computer
function playGame(user){
    // this will create a random number between 0 and 2 which will be used
    // to index the computer desicion
    let rand = Math.floor(Math.random()*3);
    let computer = ["rock", "paper", "scissor"];
    let computer_decide = computer[rand];

    // decide who won using the rules
    let winner = "No one";
    
    if(user === computer_decide) {
        winner = "No one"
    } else if(user === "rock" && computer_decide === "scissor") {
        winner = "You"
    } else if(user === "paper" && computer_decide === "rock") {
        winner = "You"
    } else if(user === "scissor" && computer_decide === "paper") {
        winner = "You"
    } else if(computer_decide === "rock" && user === "scissor") {
        winner = "Computer"
    } else if(computer_decide === "paper" && user === "rock") {
        winner = "Computer"
    } else if(computer_decide === "scissor" && user === "paper") {
        winner = "Computer"
    }

    // return the winner
    return winner;
    
}

// who won
let who = document.querySelector("#winner");

// where did the user click
// listen for rock
document.querySelector(".rock").addEventListener("click", 
    function(){
        who.innerHTML = playGame("rock") + " WON!"
    }
);

// listen for paper
document.querySelector(".paper").addEventListener("click", 
    function() {
        who.innerHTML = playGame("paper") + " WON!"
    }
);

// listen for scissor
document.querySelector(".scissor").addEventListener("click", 
    function(){
        who.innerHTML = playGame("scissor") + " WON!"
    }
);