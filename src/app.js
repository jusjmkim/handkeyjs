var UI = require('ui');
var Vector2 = require('vector2');

var main, input;
var auth = [0, 1, 0, 1, 0, 1];

function createFirstPage() {
  main = new UI.Card({
    title: 'HandKey',
    icon: 'images/menu_icon.png',
    subtitle: 'Enter Password',
    body: 'Press Up/Down'
  });
  
  input = [];
  main.show();
  
  callListeners(); 
}

function createTryAgainPage() {
  var tryAgain = new UI.Card({
    title: 'Try Again'
  });
  
  tryAgain.show();
}

function upListener() {
  main.on('click', 'up', function(e) {
  
    if (input.length === 6) {
      input.push(0);
      checkAuthentication(auth,input);
    } else {
      input.push(0);
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
    
    if (input.length === 6) {
      input.push(1);
      checkAuthentication(auth,input);
    } else {
      input.push(1);
    }
    
  });
}

function callListeners() {
  upListener();
  selectListener();
  downListener();
}

function checkAuthentication(a, b) {
  if (!Array) {return false;}

  var counter = true;
  for (var i = 0; i < auth.length; i++){
    if (auth[i] !== input[i]) {
      counter = false;
      break;
    }
  }
 
   if (counter) {
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

//{sendMessage();}

//function sendMessage() {
  //Pebble.sendAppMessage({"key": "Kevin"});