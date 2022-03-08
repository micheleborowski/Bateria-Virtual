//variáveis
const playingClass = "playing";
crashRide = document.getElementById("crash-ride");
hitHatTop = document.getElementById("hihat-top");

//arrow Function
const animateCrashOrRide = () => {
    crashRide.style.transform = "rotate(0deg) scale(1.5)";
};

const animateHitHatClosed = () => {
    hitHatTop.style.top = "175px";
};

const playSound = e => {
    const keyCode = e.keyCode;
    keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
    if(!keyElement) return;

    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    audioElement.currentTime = 0;
    audioElement.play();

    switch(keyCode){
        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 73:
        case 75:
            animateHitHatClosed();
            break;    
    }

    keyElement.classList.add(playingClass);
};

const removeCrashRideTransition = e =>{
    if(e.propertyName !== "transform") return;

    e.target.style.transform = "rotate(7.3deg) scale(1.5)";
}

const removeHitHatTopTransition = e =>{
    if(e.propertyName !== "top") return;

    e.target.style.top = "165px";
}

const removeKeyTransition=e => {
    if(e.propertyName !== "transform") return;
    
    e.target.classList.remove(playingClass);
}

//array
const drumKeys = Array.from(document.querySelectorAll("key"));
drumKeys.forEach(key => {
    key.addEventListener("transitioned", removeKeyTransition);
});

//efeitos de transição
crashRide.addEventListener('transitionend', removeCrashRideTransition);
hitHatTop.addEventListener('transitionend', removeHitHatTopTransition);

//Efeito keydow para tocar o som
window.addEventListener("keydown", playSound);


//Keycode.info informa o código de cada tecla