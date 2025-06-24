let butten = document.getElementById('btn');
// list of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
butten.addEventListener("dblclick",() =>{
    // alert('Button clicked!'); , by ckicking it just shows an alert sigh that we have clicked 
   
    document.querySelector(".box").innerHTML = "<b>Button clicked!</b> enjoy your day!";  // this will change the text inside the box after clicking 
});

butten.addEventListener("contextmenu",() =>{  
    alert('dont hack us by Right click please!'); // this will show an alert when right clicking the button 
    
    });
document4 .addEventListener("keydown",(e) =>{  
    console.log(e); // this will show the key that is pressed
     });