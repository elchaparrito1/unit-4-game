var gems = {
    blue: {
        name: "azul",
        value: 0
    },
    red: {
        name: "rojo",
        value: 0
    },
    yellow: {
        name: "amarillo",
        value: 0
    },
    green: {
        name: "green",
        value: 0
    },
};

var yourScore = 0;
var targetScore = 0;
var wins = 0;
var losses = 0;

var randomNumber = function (min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

var startGame = function () {
    yourScore = 0;
    targetScore = randomNumber (19, 120);
    gems.blue.value = randomNumber (1, 12);
    gems.red.value = randomNumber (1, 12);
    gems.yellow.value = randomNumber (1, 12);
    gems.green.value = randomNumber (1, 12);

    $("#targetScore").html(targetScore);
    $("#yourScore").html(yourScore);

console.log(targetScore);
console.log(gems.blue.value);
}

startGame();

var scoreUpdate = function (gems) {
yourScore = yourScore + gems.value;
$("#yourScore").html(yourScore);

winCheck();

}

var winCheck = function () {
    if (yourScore === targetScore) {
        alert("You win!");
        wins++;
        startGame();
        $("#winner").html(wins);
    } else if (yourScore > targetScore) {
        alert("You lose!");
        losses++;
        startGame();
        $("#loser").html(losses);
    }
}

$("#blue").click(function() {
    scoreUpdate(gems.blue);
});

$("#red").click(function() {
    scoreUpdate(gems.red);
});

$("#yellow").click(function() {
    scoreUpdate(gems.yellow);
});

$("#green").click(function() {
    scoreUpdate(gems.green);
});