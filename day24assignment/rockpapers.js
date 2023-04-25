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
    let Sallyhand = player1.getHand;        // --Argument for player1 Sally
    let Bobhand = player2.getHand;          // --Argument for player2 Bob
    let winner = null;

    console.log(player1.name + Sallyhand);  // --Logging
    console.log(player1.name + Sallyhand);  // --Logging

    if (Sallyhand === Bobhand) {    // ----If Sally and Bob has the same hands...
        console.log("It's a tie");  // ----log that it is a tie
        return winner;

      } else if (                   // ---else....
