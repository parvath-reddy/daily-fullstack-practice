console.log("hello world")



//this is an IF statement same as other coding languages 
let age = 18;
let grace = 1
if (age + grace > 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}



console.log(age + grace) // this is how using ARTHAMATIC OPERATOR  will help , operator are diffrent kind as we leaarned from doffent languages 
console.log(age - grace)
console.log(age * grace)
console.log(age ** grace)
console.log(age % grace)
// console.log(age++grace) these both are also operatior used in diffrent conditon 
// console.log(age--grace) 


// this is ASSIGNMENT OPERATOR now 
age += grace
console.log(age)
age -= grace
console.log(age)
age *= grace
console.log(age)
age /= grace
console.log(age)
age %= grace
console.log(age)
age **= grace
console.log(age)

//this is cCOMPARISION OPERATOR
let a = 10
let b = 20
console.log(a == b) // this is equal to
console.log(a != b) // this is not equal to
console.log(a > b) // this is greater than
console.log(a < b) // this is less than
console.log(a >= b) // this is greater than or equal to
console.log(a <= b) // this is less than or equal to
console.log(a === b) // this is equal to and data type ( it even compares the data type )

// LOGICAL OPERATORS 
let x = 10
let y = 20 //opprant
console.log(x && y) // this is AND operator
console.log(x || y) // this is OR operator
console.log(!x) // this is NOT operator



/*
this is used to write a multi line comment in js 
*/



// if else if ladder 
let time = 13;

if (time > 18) {
    console.log("Good evening");
} else if (time > 14) {
    console.log("Lunch time");
} else if (time > 12) {
    console.log("Good afternoon");
} else if (time > 10) {
    console.log("Good morning");
} else {
    console.log("Too early!");
}


//ternary operator 
//its more easier to understand and write down the code 

x = 6;
y = 5;
let z = (x > b) ? ( a-b ) : ( a+b );
console.log(z);
