console.log("script.js loaded");
// let box = document.getElementsByClassName("box");
// console.log(box); // This will log the HTMLCollection of elements with class "box"

let boxes = document.querySelector(".container").children;

function getrandomColor() {
    let val1=Math.ceil(0+Math.random()* 255);
    let val2=Math.ceil(0+Math.random()* 255);
    let val3=Math.ceil(0+Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
    
}
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getrandomColor();
    e.style.Color = getrandomColor();
})