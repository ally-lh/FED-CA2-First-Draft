let bg = document.getElementById('backgroundimage'); 
let main = document.getElementById('main');

window.addEventListener('scroll', function(){ 
    let value = window.scrollY; 
    bg.style.top = value* 0.5 + 'px';

})


