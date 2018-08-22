//Global Variables

// var bleep = new Audio ();
// bleep.src = "assets/sounds/button-20.mp3";

// var playSound = function () {
//     bleep.play();
// }

var gem = {
    blue: {
        name: "Blue",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    },
    green: {
        name: "Green",
        value: 0
    }
    
};

//Score to track current and target
var currentScore = 0;
var targetScore = 0;
var wins = 0;
var losses = 0;

//Functions

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var startGame = function () {
    currentScore = 0;
    targetScore = getRandom (19, 120);
    gem.blue.value = getRandom(1, 12);
    gem.red.value = getRandom(1, 12);
    gem.yellow.value = getRandom(1, 12);
    gem.green.value = getRandom(1, 12);

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);


    console.log(currentScore);
    console.log(targetScore);

}

var scoreChange = function (gem) {
    currentScore = currentScore + gem.value;
    $("#yourScore").html(currentScore);
    
    victoryCheck();    

    console.log(currentScore);
    console.log(targetScore);

}

var victoryCheck = function () {

  if (currentScore > targetScore) {
    alert("LOSER!!");
    losses++
    $("#loser").html(losses);
    startGame();
    
} else if (currentScore === targetScore) {
    alert("You WIN!!!");
    wins++
    $("#winner").html(wins);
    startGame();
}


}

//Main Process  
$("#blue").click(function() {
    scoreChange(gem.blue);

});

$("#red").click(function() {
    scoreChange(gem.red);

});

$("#yellow").click(function() {
    scoreChange(gem.yellow);

});

$("#green").click(function() {
    scoreChange(gem.green);

});

startGame ();



















































































































































  var targetNumber = 53;

  if (targetNumber) {
      console.log("Its working");
  }

$("#target-number").text(targetNumber);

// var test = document.querySelector("target-number").innerHTML = targetNumber;

var counter = 0;

var record = 0;


$("#record").text(record);

var numberTen = 10;
var numberFive = 5;
var numberThree = 3;
var numberSeven = 7;

var imageCrystal = $("<img>");

imageCrystal.addClass("crystal-image");

imageCrystal.attr("src", "assets/images/gem-blue.jpg");

imageCrystal.attr("data-crystalvalue", numberTen);

$("#crystal-ten").append(imageCrystal);



var imageCrystalFive = $("<img>");

imageCrystalFive.addClass("crystal-image");

imageCrystalFive.attr("src", "assets/images/gem-red.jpg");

imageCrystalFive.attr("data-crystalvalue", numberFive);

$("#crystal-five").append(imageCrystalFive);



var imageCrystalThree = $("<img>");

imageCrystalThree.addClass("crystal-image");

imageCrystalThree.attr("src", "assets/images/gem-yellow.jpeg");

imageCrystalThree.attr("data-crystalvalue", numberThree);

$("#crystal-three").append(imageCrystalThree);



var imageCrystalSeven = $("<img>");

imageCrystalSeven.addClass("crystal-image");

imageCrystalSeven.attr("src", "assets/images/gem-green.jpeg");

imageCrystalSeven.attr("data-crystalvalue", numberSeven);

$("#crystal-seven").append(imageCrystalSeven);

// var numberOptions = [10, 5, 3, 7];


// for (var i = 0; i < numberOptions.length; i++) {

 
//   var imageCrystal = $("<img>");
 
//   imageCrystal.addClass("crystal-image");

//   imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

//   imageCrystal.attr("data-crystalvalue", numberOptions[i]);

 
//   $("#crystals").append(imageCrystal);
// }


$(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });