//the answerList will dispaly strings stating what your accuracy is dispalyed with a percentage and also will list
//how many incorrect filled black/white tiles you missed
var answerList = [];

//list called for the tiles in which are all set to white at the beginning of the program, when you start your level and when you choose to reset
var playerList = ["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"];

//time is called in a global variable to represent any input of time
//in this case it is 15, 10, and 5
var time = 0;

//first screehsttsn displayed once you start the program and explains the game/program
setScreen("introScreen");
answerKey();

//this onEvent button once clicked takes you to the game screen so that you can input your answers on the screen
onEvent("doneBtn", "click", function( ) {
  hideElement("resetBtn");
  hideElement("doneBtn");
  checkAnswers(playerList, answerList);
  showElement("tryAgainBtn");
  showElement("resultsText");
});


//this onEvent button will take you back to the introScreen where you can select a different level (difficulty) if youd like to play again
onEvent("tryAgainBtn", "click", function( ) {
  answerList = [];
  playerList = ["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"];
  time = 0;
  setScreen("introScreen");
  for (var i = 0; i < 25; i++){
    setProperty("sq" + [i+1], "background-color", "white");
    setProperty("sq" + [i+1], "border-color", "black");
    setProperty("sq" + [i+1], "border-width", 1);
    setProperty("levelSelect", "text", "Choose a Difficulty");
    
    setText("resultsText", "");
  }
  showElement("resetBtn");
  showElement("doneBtn");
  hideElement("tryAgainBtn");
  hideElement("resultsText");
  answerKey();
});

//this onEvent button resets all of the tiles that you have chosen back to the color white
//doing this you are allowed to "retry" the level to see if you can memorize the pattern
onEvent("resetBtn", "click", function( ) {
  for (var i = 0; i < 25; i++){
    setProperty("sq" + [i+1], "background-color", "white");
    playerList = ["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"];
  }
});

//this OnEvent sets the time while using if statements to see what level you choose and depending
//on what level you choose you a certain time will be displayed on the screen
onEvent("levelSelect", "change", function( ) {
  var level = getText("levelSelect");
  if (level == "EASY"){
    time = 1500;
    setScreen("answerScreen");
    timer(time);
  } else if (level == "MEDIUM"){
    time = 1000;
    setScreen("answerScreen");
    timer(time);
  } else if (level == "HARD"){
    time = 500;
    setScreen("answerScreen");
    timer(time);
  }
});


//function allows to check the users answer to see if it is incorrect or not
//if the user answers incorrecly red boxes will show around the spots of where you were supposed to click
function checkAnswers(playerList, answerList){
  var filledWrong = 0;
  var missedWrong = 0;
  for (var i = 0; i < playerList.length; i++) {
    if ((answerList[i] == "b") && (playerList[i] == "w")){
      setProperty("sq" + [i+1], "border-color", "red");
      setProperty("sq" + [i+1], "border-width", 2);
      missedWrong++;
    } else if (answerList[i] != playerList[i]){
      setProperty("sq" + [i+1], "border-color", "red");
      setProperty("sq" + [i+1], "border-width", 2);
      filledWrong++;
    }
  }
    var totalAccuracy = (((25 - (filledWrong+missedWrong))/25) * 100);
    setText("resultsText", "Incorrectly filled black: " + filledWrong + "\nIncorrectly left white: " + missedWrong + "\nTotal Accuracy: " + totalAccuracy + "%");
}

//function that sets the timer
function timer(ms) {
  var setTime = 0;
  if (ms == 1500) {
    setTime = 15;
    setText("timer", "Time Left: " + setTime);
  } else if (ms == 1000){
    setTime = 10;
    setText("timer", "Time Left: " + setTime);
  } else if (ms == 500){
    setTime = 5;
    setText("timer", "Time Left: " + setTime);
  }
  timedLoop(1000, function() {
    setTime = setTime - 1;
    setText("timer", "Time Left: " + setTime);
    if (setTime == 0){
      stopTimedLoop();
      setScreen("gameScreen");
    }
    });
}


//function that displays shows you what the correct answer is
function answerKey() {
  for (var i = 0; i < 25; i++) {
    var color = randomNumber(0,2);
    if ((color == 0) || (color == 1)) {
      appendItem(answerList, "w");
    } else if (color == 2) {
      appendItem(answerList, "b");
    }
  }
  for (var j = 0; j < answerList.length; j++)
    if (answerList[j] == "w"){
      setProperty("ans_sq" + ([j+1]), "background-color", "white");
    } else if (answerList[j] == "b"){
      setProperty("ans_sq" + ([j+1]), "background-color", "black");
    }
}









//this on event is for every block on the screen since it is a 5x5 grid
//once you click on it the background will change from white to black showing that you have clicked on it
onEvent("sq1", "click", function( ) {
  setProperty("sq1", "background-color", "black");
  playerList[0] = "b";
});
onEvent("sq2", "click", function( ) {
  setProperty("sq2", "background-color", "black");
  playerList[1] = "b";
});
onEvent("sq3", "click", function( ) {
  setProperty("sq3", "background-color", "black");
  playerList[2] = "b";
});
onEvent("sq4", "click", function( ) {
  setProperty("sq4", "background-color", "black");
  playerList[3] = "b";
});
onEvent("sq5", "click", function( ) {
  setProperty("sq5", "background-color", "black");
  playerList[4] = "b";
});
onEvent("sq6", "click", function( ) {
  setProperty("sq6", "background-color", "black");
  playerList[5] = "b";
});
onEvent("sq7", "click", function( ) {
  setProperty("sq7", "background-color", "black");
  playerList[6] = "b";
});
onEvent("sq8", "click", function( ) {
  setProperty("sq8", "background-color", "black");
  playerList[7] = "b";
});
onEvent("sq9", "click", function( ) {
  setProperty("sq9", "background-color", "black");
  playerList[8] = "b";
});
onEvent("sq10", "click", function( ) {
  setProperty("sq10", "background-color", "black");
  playerList[9] = "b";
});
onEvent("sq11", "click", function( ) {
  setProperty("sq11", "background-color", "black");
  playerList[10] = "b";
});
onEvent("sq12", "click", function( ) {
  setProperty("sq12", "background-color", "black");
  playerList[11] = "b";
});
onEvent("sq13", "click", function( ) {
  setProperty("sq13", "background-color", "black");
  playerList[12] = "b";
});
onEvent("sq14", "click", function( ) {
  setProperty("sq14", "background-color", "black");
  playerList[13] = "b";
});
onEvent("sq15", "click", function( ) {
  setProperty("sq15", "background-color", "black");
  playerList[14] = "b";
});
onEvent("sq16", "click", function( ) {
  setProperty("sq16", "background-color", "black");
  playerList[15] = "b";
});
onEvent("sq17", "click", function( ) {
  setProperty("sq17", "background-color", "black");
  playerList[16] = "b";
});
onEvent("sq18", "click", function( ) {
  setProperty("sq18", "background-color", "black");
  playerList[17] = "b";
});
onEvent("sq19", "click", function( ) {
  setProperty("sq19", "background-color", "black");
  playerList[18] = "b";
});
onEvent("sq20", "click", function( ) {
  setProperty("sq20", "background-color", "black");
  playerList[19] = "b";
});
onEvent("sq21", "click", function( ) {
  setProperty("sq21", "background-color", "black");
  playerList[20] = "b";
});
onEvent("sq22", "click", function( ) {
  setProperty("sq22", "background-color", "black");
  playerList[21] = "b";
});
onEvent("sq23", "click", function( ) {
  setProperty("sq23", "background-color", "black");
  playerList[22] = "b";
});
onEvent("sq24", "click", function( ) {
  setProperty("sq24", "background-color", "black");
  playerList[23] = "b";
});
onEvent("sq25", "click", function( ) {
  setProperty("sq25", "background-color", "black");
  playerList[24] = "b";
});

