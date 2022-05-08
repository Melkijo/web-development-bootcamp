var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(document).keypress(function(){
    if(level === 0){
        nextSequence();
    }

    else{
        return;
    }
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        },200);
        playSound("wrong");
        startOver();
    }
}
$(".btn").on("click",function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    level ++;
    $("h1").text("Level " + level);
    
}

function playSound(name){
    var gameAudio = new Audio("sounds/" + name + ".mp3");
    gameAudio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    },100);
}

function startOver(){
    level = 0;
    gamePattern = [];
}




