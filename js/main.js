$(document).ready(function() {
	
/*--- All Variables being used. ---*/
	var secretNumber = 0;
	var userGuess = 0;
	var finish = false; 

/*--- This generates a random number ---*/
	function secretNumberGenerator() {
		secretNumber = (Math.floor(Math.random()*100))
		console.log("Secret number = " + secretNumber)
	}

	secretNumberGenerator();

/*--- This will let the user know if they are getting warm or cold. ---*/
	function positiveAmount() {
		if (userGuess / secretNumber === 1) {
			setFeedback ("Correct! You did it!");
			finish = true;
			} else if ((secretNumber - userGuess) > 60.5) {
            setFeedback("Too cold! Ice Age 2.0 here we go.");
            } else if ((secretNumber - userGuess) > 50.5) {
            setFeedback("I think I hear Vanilla Ice singing Ice Ice Baby. Still cold.");
            } else if ((secretNumber - userGuess) > 40.5) {
            setFeedback("Getting closer, but still too cool.");
            } else if ((secretNumber - userGuess) > 30.5) {
            setFeedback("It feels like fall; not cold or hot, just warm.");
            } else if((secretNumber - userGuess) > 20.5) {
            setFeedback("Warm enough to wear a tank top. Keep guessing!");
            } else if ((secretNumber - userGuess) > 7.5) {
            setFeedback("Ryan Gosling hot!");
            } else if ((secretNumber - userGuess) > 1.5) {
            setFeedback("Burn baby burn! So close!");
            } else if ((secretNumber - userGuess) > 0.5){
            setFeedback("The sun is too close. Body melting...just keep guessing.");
        	} else {
       		}
    }

/*--- Compares whether the difference is positive or negative --*/
    function comparisonAmount(){
        if (userGuess - secretNumber > 0) {
            negativeAmount();
        } else {
            positiveAmount();
        }
    }

/*--- Function that sends feedback --*/
    function setFeedback(feedback) {
        $('#feedback').text(feedback);
    }

/*--- Function that counts user attempts --*/
    function setCount(count){
        $('#count').text(guessCount);
    }

/*--- Function that resets game --*/
    function newGame(){
        guessCount = 0;
        finish = false;
        $('#userGuess').val('');
        $('#count').text(guessCount);
        $('#guessList li').remove();
        secretNumber = (Math.floor(Math.random()*100));
        setFeedback("Make your guess!");
        console.log("it works! new secret number is " + secretNumber);
    }


/*---- Funtion to start a new game ----*/
    $('.new').click(function(){
        newGame();
    });

/*-- Checks the user's input--*/
function checkInput(){
    if(isNaN(userGuess)) {
        alert("Please enter a number from 1 - 100!");
    } else if(userGuess === " ") {
        alert("Well, you have to input a number");
    } else if (userGuess < 0 || userGuess > 100) {
        alert("Plese enter a number from 1 - 100!");
    } else {
        comparisonAmount();
        console.log("User guess = " + userGuess);
        $('#userGuess').val('');
        guessCount++;
        setCount(guessCount);
        $('ul#guessList').append("<li>" + userGuess + "</li>");
    }
}

/*--- To get user's input --*/
    $("form").submit(function(event){
        event.preventDefault();
        //if user finished the game, it doesn't allow him to continue!
        if(!finish){
            userGuess = $('#userGuess').val();
            checkInput();
        } else {
            setFeedback("You already won! Need to start a new game!");
        }
    });

 });

