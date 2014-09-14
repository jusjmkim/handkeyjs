var UI = require('ui');
var Vector2 = require('vector2');

var main;
var input = [];
var auth = [0, 1, 0, 1, 0, 1];

function createFirstPage() {
  main = new UI.Card({
    title: 'HandKey',
    icon: 'images/menu_icon.png',
    subtitle: 'Enter Password',
    body: 'Press Up/Down'
  });
  
  main.show();
  
  callListeners(); 
}

function createTryAgainPage() {
  var tryAgain = new UI.Card({
    title: 'Try Again'
  });
  
  tryAgain.show();
}

function createSuccessPage() {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Success!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
  
  sendMessage();
}

function upListener() {
  main.on('click', 'up', function(e) {
    input.push(0);
    if (input.length > 5) {
      checkAuthentication(auth,input);
    }
  
  }); 
}

function selectListener() {
  main.on('click', 'select', function(e) {
  
    var wind = new UI.Window();
    var textfield = new UI.Text({
      position: new Vector2(0, 50),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: 'HandKey Directions',
      textAlign: 'center'
    });
    wind.add(textfield);
    wind.show();
  
  }); 
}

function downListener() {
  main.on('click', 'down', function(e) {
    input.push(1);
    if (input.length > 5) {
      checkAuthentication(auth,input);
    }
    
  });
}

function callListeners() {
  upListener();
  selectListener();
  downListener();
}

function checkAuthentication(a, b) {

  var counter = true;
  for (var i = 0; i < auth.length; i++){
    if (auth[i] !== input[i]) {
      counter = false;
      break;
    }
  }
 
  if (counter) {
     createSuccessPage();
  } else {
    createTryAgainPage();
    setTimeout(function() {
      createFirstPage();
    }, 2000);
  }
}

(function() {
  createFirstPage();
})();

function sendMessage() {
  var url = "http://handkeyjs.herokuapp.com/serial_number";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('POST', url, true);
  xmlhttp.send("serial_number=" + Pebble.getAccountToken());
}