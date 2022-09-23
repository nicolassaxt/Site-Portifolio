const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let imgx = 0;

function carrosel(){
    imgx++;

    if(imgx > 3){
        imgx = 0;
    }

    imgs.style.transform = `translateX(${-imgx * 5}rem)`;
}

setInterval(carrosel, 1800);

