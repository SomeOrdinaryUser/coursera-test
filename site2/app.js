const getDate = () => {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleDateString();
}
getDate();

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        burger.classList.toggle('toggle');
    });


}
navSlide();