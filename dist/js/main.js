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
    let cm = "Computer: "+computer_decide+"\nUser: "+user+"\n";
    
    // rock beats scissor
    if(computer_decide == 'rock' && user == 'scissor'){
        winner = cm+'Computer';
    } else if(computer_decide == 'scissor' && user == 'rock'){
        winner = 'User'
    }
    // scissor beats paper
    else if((computer_decide == 'scissor' && user == 'paper')){
        winner = 'Computer';
    } else if(computer_decide == 'paper' && user == 'scissor'){
        winner = 'User';
    }
    // paper beats rock
    else if((computer_decide == 'rock' && user == 'paper')){
        winner = 'User';
    } else if(computer_decide == 'paper' && user == 'rock'){
        winner = 'Computer';
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