(function(window){
    var helloJ = new Object();
    var word = "Goodbye ";
    helloJ.sayGoodbye = function(name){
        console.log(word +name)
    }
    window.helloJ = helloJ;

})(window);