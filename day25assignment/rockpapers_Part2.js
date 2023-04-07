let hands = ["rock", "paper", "scissors"];       // --Defining hands array with the values

function getHand() {    // ---defining getHand function
    return hands[parseInt(Math.random()*10) % 3]; // ---returns-hand from the array using the given bracket info from assignment
}

// --Below are the two objects for the two players-name and getHand-----
let player1 = {
    name: "Sally",
    getHand:getHand
};

let player2 = {
    name: "Bob",
    getHand:getHand
};

function playRound(player1, player2) {  // ---Defining the Function called playRound with two arguments
    let Sallyhand = player1.getHand();        // --Argument for player1 Sally
    let Bobhand = player2.getHand();          // --Argument for player2 Bob
    
    console.log("Sally plays " + Sallyhand);  // --Logging
    console.log("Bob plays " + Bobhand);      // --Logging

    if (Sallyhand === Bobhand) {              // ----If Sally and Bob has the same hands then log that..
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

    playRound(player1,player2);                //****---Function to playRound 

    // -------PART TWO ASSIGNMENT STARTS HERE-----------
    
    function playGame(player1, player2, playUntil) {
    }