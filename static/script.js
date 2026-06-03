const track = document.getElementById("track");
const cards = document.querySelectorAll(".card");
const dotsContainer = document.getElementById("dots");

let index = 0;

const visible = 3;
const total = cards.length;
const maxIndex = total - visible;

for(let i = 0; i <= maxIndex; i++){
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

function update(){

    track.style.transform = `translateX(-${index * (100 / visible)}%)`;

    dots.forEach(d => d.classList.remove("active-dot"));

    if(dots[index]) dots[index].classList.add("active-dot");

}

function auto(){

    index++;

    if(index > maxIndex){
        index = 0;
    }

    update();

}

update();
setInterval(auto, 2500);