// const getAllSpan = document.querySelectorAll('span');


const getAllSpan = document.getElementById('completeGallery').getElementsByTagName('span');
 

for(let i=0;i<getAllSpan.length;i++){
  
    let elementi = document.getElementById(`btnGun${i}`);
     
    let div1 = document.getElementById(`gun${i}`);
   let div2 = document.getElementById(`gun${i}Details`);

    getAllSpan[i].addEventListener('mouseover',(e)=>{
        div1.style.display = 'none';
        div2.style.display = '';

    }) 

    getAllSpan[i].addEventListener('mouseout',(e)=>{
        div1.style.display = '';
        div2.style.display = 'none';

    }) 
}




const getHover = document.getElementById('prevId');
const getHoverNext = document.getElementById('nextId');


getHover.addEventListener('mouseover', (e)=>{
    getHover.style.backgroundColor =  'black'; 
    e.preventDefault(); 
});

getHover.addEventListener('mouseout', (e)=>{
    getHover.style.backgroundColor =  ''; 
    e.preventDefault(); 
});

getHoverNext.addEventListener('mouseover', (e)=>{
    getHoverNext.style.backgroundColor =  'black'; 
    e.preventDefault(); 
});

getHoverNext.addEventListener('mouseout', (e)=>{
    getHoverNext.style.backgroundColor =  ''; 
    e.preventDefault(); 
});



function openModal() {
document.getElementById("myModal").style.display = "block";
}

function closeModal() {
document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("demo");

if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";

} 