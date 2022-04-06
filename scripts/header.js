function headerChanger(){
    let mainH = document.querySelector('.intro__header span');
    i = 0;
    headerVariance = [' - город возможностей', ' - это наш проект', ' - и кому он нужен'];

    setInterval(() => {
        mainH.style.animation = "opacityAnimation 3s";
        setTimeout(() =>{
            mainH.style.animation = "none";
        }, 3000);
    }, 5000);

    mainH.onanimationstart = () => {        
        current = headerVariance[++i % headerVariance.length];
        mainH.textContent = current;
    }    
}
headerChanger();