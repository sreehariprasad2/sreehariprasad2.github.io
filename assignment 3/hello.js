(function(window){
    var helloA = new Object();
    var word = "Hello ";
    helloA.sayHello = function(name){
        console.log(word + name)
    }
    window.helloA = helloA;

})(window);
