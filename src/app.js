var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'HandKey',
  icon: 'images/menu_icon.png',
  subtitle: 'Enter Password',
  body: 'Press Up/Down'
});

main.show();

var auth = [0,0,0,0,0];      
var input = [];

main.on('click', 'up', function(e) {
 {input.push(0);}
 if (input.length === 5)
  {checkauthentication(auth,input);} 


});

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

main.on('click', 'down', function(e) {
   {input.push(1);}
  if (input.length === 5)
  {checkauthentication(auth,input);}
 
  
});


 function checkauthentication(a, b)

{if (!Array)
        return false;

    // compare lengths - can save a lot of time 
    if (auth.size === input.length)
    return true;
 
 if (true)
 {var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Success!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
}
}
//{sendMessage();}

//function sendMessage() {
  //Pebble.sendAppMessage({"key": "Kevin"});
