
var letters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

window.onload = function() {

     // 1. computer chooses a letter ->DONE
    var compChoice = Math.floor(Math.random() * 26); // Line ->generates a random num
    compChoice = letters[compChoice]; // Line -> picks a letter using the random num as an index value.
    document.getElementById("guessedRemaining").textContent = ("Guesses Left: " + guessesRemaining);
    // 2. user chooses a letter
    var userGuess; // Line stores the onkey input from the user
// Below -> camputures the user input adds it to both the .guessed html tag and to the userGuess var.
document.onkeyup = function () {
        var userInput = String.fromCharCode(event.keyCode).toLowerCase();
        userGuess = userInput;
        $(".guessed").append(userInput);
    };


    var wins = 0; // Line -> acc wins
    var losses = 0;// Line -> acc  losses
    var guessesRemaining = 10; // Line -> acc chances
  
if (userGuess === compChoice) {
    var wins = 0;
    wins++;
    document.getElementById("win").textContent = ("Wins: " + wins);
} else if (userGuess !== compChoice) {
    guessesRemaining--;
    document.getElementById("guessedRemaining").textContent = ("Guesses Left: " + guessesRemaining);
} else if (guessesRemaining === 0) {
    var losses = 0;
    losses++;
}

    // 3.  if the (user guess === computor )
    //        wins++
    //        reset remaining guesses
    //  4. if the user guess !== computor guess
    //          -> remaining guesses - 1;
    //          -> + misses to the previous guess tag;
    //
    // 5. if (remaining guess === 0) 
    //           => losses++;

}
