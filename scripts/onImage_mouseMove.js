let images = document.querySelector('.mouse-parallax');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    images.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});