function textAppear(){
    setInterval(() => {
        let carts = document.querySelectorAll('.cart')
        for (let cart of carts){
            cart.addEventListener('mouseover', function hover() {
                cart.firstElementChild.style.opacity = "100%";
                cart.firstElementChild.style.transform = "translate(0) rotate(0)";
            });
            cart.addEventListener('mouseleave', function leave() {
                cart.firstElementChild.style.opacity = "0";
                cart.firstElementChild.style.transform = "translate(0px, 20px) rotate(5deg)";
            });
        }
    }, 1000);    
}
textAppear();