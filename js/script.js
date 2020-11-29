var myName = "Willow"


var h1Elements = document.getElementsByTagName("h1");
var body_elem = document.getElementsByTagName("body");

function dark_mode() {
    for (var i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = "#fff";
    }
    document.body.style.backgroundColor = "#000";
}

function light_mode() {
    for (var i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = "#000";
    }
    document.body.style.backgroundColor = "white";
}