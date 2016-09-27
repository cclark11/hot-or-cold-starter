
var guessCount=0;
var compNumber;
var userGuess;

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function(){
  		newGame();
  	});
  	$("form").on("submit",function(event){
  		event.preventDefault();
  		userGuess = parseInt($("#userGuess").val(),10);
  		guessCount+=1;

  		$("#feedback").text(hotOrCold());
  		$("#count").text(guessCount);
  		$("#guessList").append("<li>Guess #"+guessCount+": "+userGuess+"</li>");
  		$("#userGuess").val("");

  	});

  	newGame();
});

function newGame(){	
	guessCount=0;
	compNumber=parseInt(Math.random()*100,10);
	$("h2#feedback").text("Make your Guess!");
	$("#count").text(guessCount);
	$("#userGuess").val("");
	$("#guessList").text("");
}
function hotOrCold(){
	var difference = Math.abs(userGuess-compNumber);
	if(isNaN(difference) || userGuess>100 || userGuess<=0){
		alert("Please enter a number between 1 and 100");
	}
	else if (difference==0){
		return"bingo!";
	}
	else if(difference<=10){
		return "very hot";
	}
	else if(difference<=20){
		return "hot";
	}
	else if(difference<=30){
		return "warm";
	}
	else if(difference<=50){
		return "cold";
	}
	else {
		return "ice cold";
	}
}