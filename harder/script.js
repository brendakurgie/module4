(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < 10; i++) {
  var name = names[i];
  var firstLetter = name.charAt(0);
  result = firstLetter.toLowerCase();
  window.name = name
 
  if (result == "j"){
   byeSpeaker.speak();
  }
  else {
    helloSpeaker.speak();
  }
}
})(window);
 
