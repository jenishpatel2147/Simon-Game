var Gpattern = [];
var Upattern = [];
var started = false;
var level = 0;

function nxtseq() {
    Upattern = [];  // Emptying the user pattern
    level++;        // Adding to level as the level just increased
    $("#level-title").text("Level " + level);
    var num = Math.floor(Math.random() * 18) + 1;
    Gpattern.push("btn" + num);
    $("#" + ("btn" + num)).fadeIn(100).fadeOut(100).fadeIn(100);
}

//function nextSequence() {
  //  userClickedPattern = [];
  //  level++;
  //  var randomNumber = Math.floor(Math.random() * 4);
  //  var randomChosenColour = buttonColours[randomNumber];
  //  gamePattern.push(randomChosenColour);
  
  //  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   // playSound(randomChosenColour);
//  }


$("button").click(function() {
    $("h1").css("color", "purple");
});

var buttonColours = ["red", "blue", "green", "yellow"];

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      restart();
    }
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

/*
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
*/

function restart() {
  level = 0;
  Gpattern = [];
  started = false;
}
