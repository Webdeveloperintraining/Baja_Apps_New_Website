const previous= document.getElementById('previousBtn');
const next=document.getElementById('nextBtn');
var currentIndex = 1;
displaySlides(currentIndex);

function displaySlides(num){
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if(num > slides.length){currentIndex=1}
    if (num < 1) { currentIndex = slides.length}
    for (x = 0; x < slides.length; x++){
        slides[x].style.display="none";
    }
    slides[currentIndex - 1].style.display="block";
}

previous.addEventListener("click",()=> displaySlides(currentIndex += -1));
next.addEventListener("click",()=> displaySlides(currentIndex += 1));