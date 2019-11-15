//Declaring Variables


let firstCard = "", 
secondCard = "",  
firstNumber = "", 
secondNumber = "", 
firstSuit = "", 
secondSuit = "",  
potSize = 0,
pOdds = 0,
cardEquity = 0,
numPlayers = 0, //
position = "", //Array from 1 to 12) 1 small blind, 2 big blind, 
range = [],  //playable cards in that position
currentBet = 0,
currentStackBlinds = 0,
playerStackBlinds = 0,
call = 0,
fold = 0,
raise = 0;

//
function positionCardRange(firstCard, secondCard, position, numPlayers){
return 1;
}

//Card Evaluation is a script that calculates whether call, fold and returns how much to raise 

//Pot odds refers to the relationship between the size of the pot and the size of the bet.
function potOdds (potSize, currentBet){
	let temp = potSize/currentBet;
	temp = 1/(temp+1);
	pOdds = temp * 100;
	alert(pOdds);
}

//Implied odds are defined as the relationship between the size of the current pot and the pot you are expected to win.
function impliedOdds (){
}

//Visually Show Cards
function showCards (){

  /*A window open says fold, or raise*/
  //let w = 200;
  //let h = 100;
  //let left = (screen.width/2)-(w/2);
  //let top = (screen.height/2)-(h/2) + 100;
  //var myWindow = window.open("", "Evaluation", 'status=yes, scrollbars=no, titlebar=no, width='+w+', height='+h+', top='+top+', left='+left);
  //myWindow.document.write("<p>You should fold</p>");

  /*Body of HTML changes says fold,raise or call*/

  //fold = 1;
  //fold = 0;
  //call = 1;
  //call = 0;
  //raise = 1;
  //raise = 0;

  firstCard = document.getElementById('firstValue').value + " of " + document.getElementById('firstSuit').value;
  alert(firstCard)
  //setTimeout(function(){ alert(firstCard); }, 200);

  secondCard = document.getElementById('secondValue').value + " of " + document.getElementById('secondSuit').value;
  //setTimeout(function(){ alert(secondCard); }, 300); 
  alert (secondCard)

  if(call == 1){
  	document.getElementById("displayCards").innerHTML = "<p>You should call</p>";  	
  }
  else if(raise == 1){
	document.getElementById("displayCards").innerHTML = "<p>You should raise</p>";
  }
  else{
  	document.getElementById("displayCards").innerHTML = "<p>You should fold</p>";
  }


  
  
}

//Resets the displayCards Field
function resetButton(){
	document.getElementById("displayCards").innerHTML = "<p></p>";
}


function loadSettings() {
    if (localStorage['firstValue']) {
        input.value = localStorage['firstValue'];
    }
}

function saveSettings() {
    localStorage['firstValue'] = input.value;
}


