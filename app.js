(function (){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for(var i=0;i<names.length;i++){
        var firstLetter =  names[i].charAt(0).toLocaleLowerCase();
        if (firstLetter === 'j'){
            helloA.sayHello(names[i]);
        }else{
            helloJ.sayGoodbye(names[i]);
        }
    }
})();