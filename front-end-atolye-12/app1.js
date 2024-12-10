
const slides =document.querySelectorAll('.slide');

let currentIndex = 0;

function showSlide(index){
    slides.forEach((slide,i)=>{
        slide.classList.remove('active');
        if(i===index) slide.classList.add('active');
    });
    
}

function nextSlide(){
    currentIndex =(currentIndex +1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide(){
    currentIndex =(currentIndex -1 +slides.length) % slides.length;
    showSlide(currentIndex);
}

let autoSlide =setInterval(nextSlide,3000);

document.getElementById('next').addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

document.getElementById('prev').addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

function resetAutoSlide(){
    clearInterval(autoSlide);
    autoSlide =setInterval(nextSlide,3000);
}