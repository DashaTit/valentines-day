const no = document.querySelector(".no");

let cords = no.getBoundingClientRect();
console.log(cords)

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let w = window.innerWidth;
let h = window.innerHeight;

let x = random(1, w)
let y = random(1, h)


no.addEventListener("mouseover", function (e) {
    let w = document.documentElement.scrollWidth;
    let h = document.documentElement.scrollHeight;
    console.log(w)
    y = random(1, h - 70)
    x = random(1, w - 300)
    console.log(x)
    no.style.top = y + "px";
    no.style.left = x + "px";
})