(function (window){
    var hiGreeter={};
    hiGreeter.name="Yaakov";
    var speakWord = "Hello";
    hiGreeter.speak=function() {
    console.log(speakWord + hiGreeter.name);
  }

  window.hiGreeter=hiGreeter;

   })(window);
