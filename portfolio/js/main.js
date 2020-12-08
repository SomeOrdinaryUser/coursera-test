//Get the button
var toTop = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// A function to show screen dimentions and page width
function getScreenDimentions() {
    document.documentElement.scrollHeight
    document.getElementById("dimenstions").innerHTML = "Page Width: " + window.innerWidth + "<br/>" + "Display Width : " + screen.width + " Pixels" + "<br/> Display Height : " + screen.height + " Pixels";
}