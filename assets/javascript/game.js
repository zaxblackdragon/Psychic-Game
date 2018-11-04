
var letters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

window.onload = function() {

     // 1. computer chooses a letter ->DONE
    // Line ->generates a random num
    var compChoice = letters[Math.floor(Math.random() * letters.length) ]; // Line -> picks a letter using the random num as an index value.
    console.log(compChoice);
 
    // 2. user chooses a letter
    var userGuess; // Line stores the onkey input from the user
    // Below -> camputures the user input adds it to both the .guessed html tag and to the userGuess var.
    var wins = 0; // Line -> acc wins
    var losses = 0;// Line -> acc  losses
    var guessesRemaining = 10; // Line -> acc chances
    var userLetters = []; 

    document.getElementById("guessedRemaining").textContent = ("Guesses Left: " + guessesRemaining);


    var reset = function () { 
        userLetters = [];
        guessesRemaining = 10;
        compChoice = letters[Math.floor(Math.random() * letters.length)]; 
        $(".guessed").html("Perevious Guesses: " );
        $("#guessedRemaining").text("Guesses Left: " + guessesRemaining);
        console.log(compChoice);
        console.log(guessesRemaining);
        //need to update - guessed left prev gueses
    }
   
    document.onkeyup = function (event) {
        event.stopPropagation();
        var userInput = event.key.toLowerCase();
        userGuess = userInput;
    
    $('.btn').on("click", function () {
      alert("You're a winner in my eyes!");
    });

        if (userLetters.indexOf(userInput) !== -1 || letters.indexOf(userInput) === -1) {
                return;
        }
        userLetters.push(userGuess);
        $(".guessed").append(userInput);
        console.log(guessesRemaining);

        if (userGuess === compChoice) {
            var wins = 0;
            wins++;
            document.getElementById("win").textContent = ("Wins: " + wins);
            reset();
        } else {
            guessesRemaining--;
            $("#guessedRemaining").text("Guesses Left: " + guessesRemaining);
            if (guessesRemaining === 0) {
                losses++; 
                $("#losses").text("Losses: " + losses);
                reset();
            }
        } //else if (guessesRemaining === 0) {
        //     var losses = 0;
        //     losses++;
        // }
    };


 



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
