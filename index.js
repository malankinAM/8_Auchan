let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click',function(){
    let slides = document.qureSelectorAll('.slides');
    slider.appendChild(slides[0]);
})
