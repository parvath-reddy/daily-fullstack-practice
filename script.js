// the acyncronous function is know as it doestnt run as order it runs as runs asyncronous means it just runs the normal code ifirst and runs the time out code later 

//e xample 

console.log("start"); //thjis will run first
console.log("stop"); //this will run second

setTimeout(() => {
    console.log("timeout"); // this will run last after 2 seconds
    
}, 2000);
setTimeout(() => {
    console.log("timeout2"); // this will run after 1 second
    
}, 1000);
console.log("last"); // this will run third

 
//call back function is a function that is passed as an argument to another function and is executed after the completion of that function.

const callback = (arg)=>{
    console.log(arg); // this will print the value of arg 

}
const loadScript = (src,callback) => {
   let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("ankoor"); // this will run after the script is loaded
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js", callback); // this will load the script and run the callback function after the script is loaded


// using this call back will become hectic if we use too many call backs in side call back so we use // promises to handle this situation

// promises are used to handle asynchronous operations in a more manageable way. A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

