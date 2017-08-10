/* I did not complete this harder assignment. You can see below where I tried to apply
some of my codes from the Psychic Game solution. 
*/

    // Creates an array that lists out all of the song titles that the computer
    // can choose from.
    var computerChoices = ["someday", "dreamlover", "emotions","fantasy", "hero"];

    // Creating variables to hold the number of initial lives. 

    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var wrongGuesses = [];
    var correctGuesses = [];

    // The computer randomly picks one of the words from the variable array.
    function computerGuess () {
            return computerChoices[Math.floor(Math.random() * computerChoices.length)];
        };

    // Tried to call the function the generated the random word and convert the result
    // into a variable.
    var cpuWord = computerGuess();

    // Tried to compute the computers word into an array of letters. 
    var cpuArr = cpuWord.split("");

    // Tried to convert the array of letters into the right number of blank spaces.
    var spaces = for (var i = 0; i < cpuArr.length; i++){
	  cpuArr[i] = "_ "; };

    // Tried to have the blank spaces show up in the HTML inside the "spaces" div.
    // I got this to work for a minute and then it stopped working.

   document.querySelector("#spaces").innerHTML = cpuArr;

    // Now is when we would hav been starting the game. This function is 
    //run whenever the user presses a key.

    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      
      // This is the if-else logic from the Psychic Game. I didn't get very far in this 
      // section.

        if (cpuArr.indexof(userguess) === -1) { guesses--; wrongGuesses.push(userGuess); }

        else {correctGuesses.push(userguess); };
        
        if (guesses <= 1) { losses++; guesses=10; wrongGuesses = []; correctGuesses = []; cpuWord = computerGuess(); };

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
     var html =
      "<p> Your word to guess:" + spaces + "</p>" +
      "<p>wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>" +
      "<p>Guesses Left: " + guesses + "</p>" +
      "<p>Your wrong guesses so far: " + wrongGuesses + "</p>" +
      "<p>Your correct guessses so far: " + correctGuesses + "</p>";
    

      // Set the inner HTML contents of the #game div to our html string
      document.querySelector("#game").innerHTML = html;
      };

