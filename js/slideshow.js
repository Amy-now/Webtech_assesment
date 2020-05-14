var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(number) {
    showDivs(slideIndex += number);
}

function currentDiv(number) {
    showDivs(slideIndex = number);
}

function showDivs(number) {
    var i;
    var slide = document.getElementsByClassName("mySlides");
    var text = document.getElementsByClassName("myText");
    var dots = document.getElementsByClassName("dots");
    if (number > slide.length) { slideIndex = 1 }
    if (number < 1) { slideIndex = slide.length }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
        text[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" button-white", "");
    }
    text[slideIndex - 1].style.display = "block";
    slide[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " button-white";
}