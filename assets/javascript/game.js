//Variable to store the alphabet
var letters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

window.onload = function() {

    
    // Line ->generates a random num and stores it in a var
    var compChoice = letters[Math.floor(Math.random() * letters.length) ]; // Line -> picks a letter using the random num as an index value and stores it in the var compChoice.
    
 
    
    var userGuess; // Line stores the onkey input from the user
    // Below -> camputures the user input adds it to both the .guessed html tag and to the userGuess var.
    var wins = 0; // Line -> acc wins
    var losses = 0;// Line -> acc  losses
    var guessesRemaining = 10; // Line -> acc chances
    var userLetters = [];  // Line -> array to store the user input. globally

    $("#guessedRemaining").text("Guesses Left: " + guessesRemaining); //  line - >  puts the number of remaining guesse in a <p>

//  Beloe -> func to reset the game everytime  there is a win or loss.
    var reset = function () { 
        userLetters = []; // -> resets the user input array
        guessesRemaining = 10;// -> resets the guesses to 10
        compChoice = letters[Math.floor(Math.random() * letters.length)];  // -> chooses an new random letter.
        $(".guessed").html("Perevious Guesses: " ); // -> updates the DOM
        $("#guessedRemaining").text("Guesses Left: " + guessesRemaining); // -> updates the DOM
    }
   
    document.onkeyup = function (event) { // - > creates the onkeyup event
       
        event.stopPropagation();// -> stops any predevised operations
        var userInput = event.key.toLowerCase(); // -> captures the user input and changes it to lower case
        userGuess = userInput; // stores the user input into the userGuess var
    


        if (userLetters.indexOf(userInput) !== -1 || letters.indexOf(userInput) === -1) { // if either condition is true the return will stop everything, if not, it will continue on. - making sure that the user input is a letter only and prevents the user from guessing the same letter twice.
                return;
        }
        userLetters.push(userGuess); // puts the userGuess into the userLetters array
        $(".guessed").append(userInput); // updates the  DOM with the userInput

        if (userGuess === compChoice) {// if the user guesses the letter correctly
            var wins = 0;
            wins++; // adds to wins
            $("#win").text("Wins: " + wins);// updates the wins in the DOM
            reset(); // calles the reset function and resets the game
        } else { // if the user miss guesses
            guessesRemaining--; // decreases the chances
            $("#guessedRemaining").text("Guesses Left: " + guessesRemaining); // updates the remaining guesses in the DOM
            if (guessesRemaining === 0) { // if the remaining guesses run out 
                losses++; // adds to the losses
                $("#losses").text("Losses: " + losses); // updates the losses in the DOM
                reset(); // resets the game
            }
        } 
    };
}
