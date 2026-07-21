// Loading screen

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading-screen").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
        },1000);

    },2000);

});



// Create floating hearts

const heartBox = document.querySelector(".floating-hearts");

const hearts = ["🤍","♡","♥","✨"];

for(let i = 0; i < 18; i++){

    let heart = document.createElement("span");

    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.position = "absolute";
    heart.style.left = Math.random()*100 + "%";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (12 + Math.random()*20) + "px";
    heart.style.opacity = Math.random();

    heart.style.animation = 
    `heartFloat ${6 + Math.random()*8}s linear infinite`;

    heartBox.appendChild(heart);

}



// Open button

const openBtn = document.getElementById("openBtn");

const music = document.getElementById("bgMusic");

openBtn.addEventListener("click",()=>{


    music.play();


    document.getElementById("opening")
    .style.opacity="0";


    setTimeout(()=>{

        document.getElementById("opening")
        .style.display="none";


        document.getElementById("memorySection")
        .scrollIntoView({
            behavior:"smooth"
        });


    },1000);


});



// Heart animation

const style = document.createElement("style");

style.innerHTML = `

@keyframes heartFloat{

from{

transform:translateY(0) rotate(0deg);

}

to{

transform:translateY(-110vh) rotate(360deg);

}

}

`;

document.head.appendChild(style);
