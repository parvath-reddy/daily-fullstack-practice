
//this is a way to get a single element and changing it 
let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor = "green";


document.getElementById("z").style.backgroundColor = "blue"; // by creating the ids and changing the color and stuff 
//this is used to change just one by naimg the id so it will not change the others and it is optimal 

document.querySelector(".box").style.backgroundColor = "gray"; 
// this will get the first element with the class box by using in line css in js , and only words for the first box 

// this works only for the 1st element with the class box so to kmake it work for the all the elements with the class box we can use a loop
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].style.backgroundColor = "red"; // this will change the color of all the boxes to red
// }
// this is a way to get all the elements with the class box and changing them