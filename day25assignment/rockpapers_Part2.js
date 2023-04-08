let hands = ["rock", "paper", "scissors"];       

function getHand() {    
    return hands[parseInt(Math.random()*10) % 3]; 
}
let player1 = {
    name: "Sally",
    getHand:getHand
};

let player2 = {
    name: "Bob",
    getHand:getHand
};

let player3 = {                        // ---------Added player 3
    name: "Emma",
    getHand:getHand
};

let player4 = {                        // -----------------Added player 4
    name: "Carter",
    getHand:getHand
};

function playRound(player1, player2) {  // ---Defining the Function called playRound with two arguments
    let Sallyhand = player1.getHand();        // --Argument for player1 Sally
    let Bobhand = player2.getHand();          // --Argument for player2 Bob
    
    console.log("Sally plays " + Sallyhand);  // --Logging
    console.log("Bob plays " + Bobhand);      // --Logging

    if (Sallyhand == Bobhand) {              // ----If Sally and Bob has the same hands then log that..
        console.log("it's a tie");            // ----log that its a tie--provided in the assignment 
        return null;                          // ----If no winner then check for the following.....
      } else if (Sallyhand === "rock" && Bobhand ===" scissors" || Sallyhand === " scissors" && Bobhand === " paper" || Sallyhand === " paper" && Bobhand === " rock")  
      {
        console.log("Sally Wins!!!");         // ----For any of the above scenario, log Sally Wins 
        return player1;
      } else (Bobhand === "rock" && Sallyhand === " scissors" || Bobhand === " scissors" && Sallyhand === " paper" || Bobhand === " paper" && Sallyhand === " rock")
      {
        console.log("Bob Wins!!!")
        return player2;
      }
}

    // -------PART TWO ASSIGNMENT STARTS HERE-----------

    function playGame(player1, player2, playUntil) {
        let SallyScore = 0;                       // --Starting Scores
        let BobScore = 0;                         // --Starting Scores
        while (SallyScore < playUntil && BobScore < playUntil) {

            // ---Log each time to help keep up score board--------
            console.log(player1.name + "Score: " + SallyScore  + "/" + player2.name + "Score: " + BobScore);
        
        let roundWin = playRound(player1, player2);
        if (roundWin === null) {
        } else if (roundOne.name === player1.name) {
            SallyScore += 1;
        } else if (roundOne.name === player2.name) {
            BobScore += 1; 
        }
    }
        if (SallyScore == playUntil) {
            return player1;
        } else if (BobScore == playUntil) {
            return player2;
        }
    }
// /----------------------------------------------------
    function playTournament(player1, player2, player3, player4, playUntil) {  //---Defining playTournament function
        let group1Winner = playGame(player1, player2, playUntil); //---first two player game
        let group2Winner = playGame(player3, player4, playUntil); //---second two player game
        let tournamentWinner = playGame(group1Winner, group2Winner, playUntil);
        return tournamentWinner;  //Announcing the winner
    }
 
    console.log("Winner is " + playGame(player1, player2, 3).name);  //Log the winner

        playTournament(player1, player2, player3, player4, 3).name + " is the world champion!"
  );