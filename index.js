//the normal way is 
console.log("hay harry you are nice! ") 
console.log("hay harry you are good! ") 
console.log("hay harry your t shirt is good ! ") 
console.log("hay harry you course is good to! ") 


//now the optimal way with functions too is 
// mainly this is used to use the fuction and change something later in function 
function nice(name) {
    console.log("hay "+ name +" you are nice !")
    console.log("hay "+ name +" you are good !")
    console.log("hay "+ name +" you are good in coding !")
    
}
nice("harry")
nice("rohan")
nice("sachin")


//sum of two numbers as a function 
function sum(a , b ,c = 6 /* this is called default parameater */ ) {
    //console.log(a + b)
    return a + b - c
}
result = sum(5 , 7)
result1 = sum(45 , 7)
result2 = sum(565 , 7)
result3 = sum(534 , 7 ,9 )

console.log("the sun of these numers is. " + result)
console.log("the sun of these numers is. " + result1)
console.log("the sun of these numers is. " + result2)
console.log("the sun of these numers is. " + result3)



//arrow function  
const func1 = (x)=>{
    console.log("im an arrow function ", x)
}

func1(34);
func1(45);
func1(67);
func1(89);