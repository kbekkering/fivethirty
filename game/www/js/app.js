// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  createCard();
})

// Countdown timer
var count = 5;
var counter;


// Keeping track of card score
var cardScore = [false, false, false, false, false];

// Reset cardScore array
function resetCardScore() {
  cardScore = [false, false, false, false, false];
  document.getElementById('test1').parentNode.parentNode.setAttribute('class','item item-body');
  document.getElementById('test2').parentNode.parentNode.setAttribute('class','item item-body');
  document.getElementById('test3').parentNode.parentNode.setAttribute('class','item item-body');
  document.getElementById('test4').parentNode.parentNode.setAttribute('class','item item-body');
  document.getElementById('test5').parentNode.parentNode.setAttribute('class','item item-body')
}

// Reset timer
function resetTimer() {
  clearInterval(counter);
}

function createCard() {
  resetCardScore();
  resetTimer();
  
  // How many items are in the array?
  var arrayLength = testArray.length;
  
  // Get 5 random indexes for the array
  var arr = []
  while(arr.length < 5){
    var randomnumber = Math.floor(Math.random() * arrayLength)
    var found = false;
    for (var i = 0;i < arr.length; i++){
    if(arr[i] == randomnumber) { found = true; break }
    }
    if(!found)arr[arr.length] = randomnumber;
  }

  // Write the corrosponding items for the previously generated random items
  for (var i = 0;i < arr.length; i++) {
    // create elementId
    var elementId = "test" + (i+1);

    // Write item to HTML
    document.getElementById(elementId).innerHTML = testArray[arr[i]];
    
  }
  count = 5;
  document.getElementById("bodySelector").className = 'scroll-content';
  document.getElementById("timer").innerHTML = count;
  counter = setInterval(timer, 1000); 
  
}

// Toggle cards between guessed correctly and not guessed
function toggleCard(elementId) {
  
  if (!cardScore[elementId - 1]) {
    cardScore[elementId - 1] = true;
    document.getElementById('test' + elementId).parentNode.parentNode.setAttribute('class','item item-body green')
  } else {
    cardScore[elementId - 1] = false;
    document.getElementById('test' + elementId).parentNode.parentNode.setAttribute('class','item item-body')
  }

}

function timer() {
  count = count-1;

  if (count == 0)
  {
     resetTimer();
     document.getElementById("bodySelector").className+=' time-up';
     document.getElementById("timer").innerHTML = "time's up!";
     return;
  } ;

  document.getElementById("timer").innerHTML = count;

}

function addToArray(newItem) {
  if (newItem.length>0) {
  testArray.push(newItem);
  };
  console.log(testArray);

}

//var testArray = ["schiphol", "pepsi max", "de toppers", "joost van de vondel", "de tachtigjarige oorlog", "de verenigde staten", "transavia", "lange frans", "hare krishna", "rita verdonk", "valentijnsdag", "buenos aires", "subway", "dirk scheringa", "alanis morissette", "prins charles", "de domstad", "esprit", "lara croft", "michiel de ruyter", "de olympische spelen", "wassenaar", "ymca", "toyota prius", "joran van der sloot", "bruce springsteen", "de maffia", "speedo", "roosendaal", "spongebob squarepants", "geert wilders", "het ijsselmeer", "backgammon", "sjaak en de bonenstaak", "boris becker", "angela groothuizen", "lufthansa", "sudoku", "peking", "john mcenroe"];
var testArray = ["1", "2", "3", "4", "5"];
