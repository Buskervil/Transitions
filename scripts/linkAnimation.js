let links = document.querySelectorAll('a')
function linkAnimation(){
    for (let link of links){
        link.addEventListener('click', function aClick(){
            document.body.style.opacity = '0';
        })
    }
}
linkAnimation();