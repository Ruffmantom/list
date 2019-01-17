var options = ["Motivation is key", "You need some milk", "Learing is key to succsess", "Everything will work out", "Things keep changing"];

//link item with id "first" in HTML
var item1 = document.getElementById("first");

function passindex () {
    
    // need to make a loop for when the list item gets cliked it switches content
    if (item1.click == true) {
        for (i = 0; i < options.length; i++) {
        item1.add(options.random);
        }     
    }
    
}
passindex();


