let hands = ["rock", "paper", "scissors"];
let player1Score = 0;
let player2Score = 0;    

function getHand() {    
    return hands[parseInt(Math.random()*10) % 3]; 
}
// let player1 = {
//     name: "Sally",
//     getHand:getHand
// };

// let player2 = {
//     name: "Bob",
//     getHand:getHand
// };

let player3 = {                        // ---------Added player 3
    name: "Emma",
    getHand:getHand
};

let player4 = {                        // -----------------Added player 4
    name: "Carter",
    getHand:getHand
};

function playRound(player1, player2) {  // ---Defining the Function called playRound with two arguments
    // let player1 = player1.getHand();        // --Argument for player1 Sally
    // let player2 = player2.getHand();          // --Argument for player2 Bob
    
    // console.log("Sally plays " + Sallyhand);  // --Logging
    // console.log("Bob plays " + Bobhand);      // --Logging

    if (player1 == player2) {              // ----If Sally and Bob has the same hands then log that..
        console.log("it's a tie");           // ----log that its a tie--provided in the assignment 
        result= "It's a Tie!"
        return null;                          // ----If no winner then check for the following.....
      } else if (player1 === "rock" && player2 ===" scissors" || player1 === " scissors" && player2 === " paper" || player1 === " paper" && player2 === " rock")  
      {
        console.log("Player 1 Wins!!!");         // ----For any of the above scenario, log Sally Wins 
        result= "Player1 Wins!";
        player1Score++;
      } else (player2 === "rock" && player1 === " scissors" || player2 === " scissors" && player1 === " paper" || player2 === " paper" && player1 === " rock")
      {
        console.log("Computer Wins!!!")
        result= "Computer Wins!";
        player2Score++;
      }

      displayResult(result);
      updateScore();
}

function updateScore() {
    const scoreContainer = document.getElementById("score");
    scoreContainer.innerHTML = `Player: ${player1Score} - Computer: ${player2Score}`;
}

function displayResult(result) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = result;
}

const buttons = document.querySelectorAll(".hands button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const player1 = button.id;
        const player2 = getHand();
        const result = playRound(player1, player2);
        console.log(result);
    });
});

    // -------PART TWO ASSIGNMENT STARTS HERE-----------

//     function playGame(player1, player2, playUntil) {
//         let SallyScore = 0;                       // --Starting Scores
//         let BobScore = 0;                         // --Starting Scores
//         while (SallyScore < playUntil && BobScore < playUntil) {

            
//             console.log(player1.name + "Score: " + SallyScore  + " // " + player2.name + "Score: " + BobScore);
        
//         let roundWin = playRound(player1, player2);
//         if (roundWin === null) {
//         } else if (roundWin.name === player1.name) {
//             SallyScore += 1;
//         } else if (roundWin.name === player2.name) {
//             BobScore += 1; 
//         }
//     }
//         if (SallyScore == playUntil) {
//             return player1;
//         } else if (BobScore == playUntil) {
//             return player2;
//         }
//     }

//     function playTournament(player1, player2, player3, player4, playUntil) {  //---Defining playTournament function
//         let group1Winner = playGame(player1, player2, playUntil); //---first two player game
//         let group2Winner = playGame(player3, player4, playUntil); //---second two player game
//         let tournamentWinner = playGame(group1Winner, group2Winner, playUntil);
//         return tournamentWinner;  //Announcing the winner
//     }
 
//     console.log("Winner is " + playGame(player1, player2, 3).name);  //Log the winner
//     console.log();
//     console.log();
//     console.log(
    
//     playTournament(player1, player2, player3, player4, 3).name + " is the world champion!"
//   );