(function (window){
    var byeGreeter={};
    byeGreeter.name="Paul";
    var speakWord = "Good Bye";
    byeGreeter.speak=function() {
    console.log(speakWord + byeGreeter.name);
  }
  window.byeGreeter=byeGreeter;
    })(window);
  