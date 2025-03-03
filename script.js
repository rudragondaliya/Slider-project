let slidecontainer = document.querySelector(".slider");
let slides = document.querySelectorAll(".slider-item ");
let indicators = document.querySelectorAll('.indicator')

let currentSlide = 0;

function showSlides(index){

    if(index >= slides.length){
        currentSlide = 0;

    }else if(index < 0){
        currentSlide = slides.length - 1;

    }else {
        currentSlide = index;

    }

     slides.forEach((slide, i) => {

       slide.classList.remove("active");
       if (i === currentSlide) {
         slide.classList.add("active");

       }
     });

     indicators.forEach((indicator,index) => {
        indicator.classList.remove('active');
        if(index === currentSlide){
            indicator.classList.add('active');
        }
     });

}

function changeSlide(direction){
    showSlides(currentSlide + direction);
}

setInterval(() => {
    changeSlide(1);
}, 5000);