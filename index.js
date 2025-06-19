// stiring is usd ot store the elements and manuplate the elements 
console.log("this is string tutorial")
let a = "hello";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]); //js is a forgiving language and will not throw an error if the index is out of range

console.log(a.length) //length of the string

let real_name = "john";
let friend = "jane";
console.log(real_name + " and " + friend + " are friends") //thsi is a normal way >>>>
console.log(`his name is ${real_name} and his firend name is ${friend}`) //this is using template letters to make the string more readable


let b = " shivam.  ";
console.log(b.trim()) //trim is used to remove the spaces from the string
console.log(b.trimStart()) //trimStart is used to remove the spaces from the start of th
console.log(b.trimEnd()) //trimEnd is used to remove the spaces from the end of th
console.log(b.repeat(3)) //repeat is used to repeat the string
console.log(b.toUpperCase()) //toUpperCase is used to convert the string to upper case
console.log(b.toLowerCase()) //toLowerCase is used to convert the string to lower case
console.log(b.split(" ")) //split is used to split the string into an array
console.log(b.split(" ", 2)) //split is used to split the string into an array
console.log(b.includes("h")) //includes is used to check if the string contains a certain character
console.log(b.startsWith("s")) //startsWith is used to check if the string starts with a certain
console.log(b.endsWith("m")) //endsWith is used to check if the string ends with a certain
console.log(b.indexOf("h")) //indexOf is used to get the index of the first occurrence of

//slicing
let c = "shivam";
console.log(c.slice(0, 4)) //slice is used to get a part of th
console.log(c.slice(4)) //slice is used to get a part of th
console.log(c.slice(-4)) //slice is used to get a part of th
console.log(c.slice(-4, -1)) //slice is used to get a part of th

console.log(c.replace("sh", "69"))

//concatenation
console.log(a.concat(b)) //concat is used to concatenate two strings
console.log(a.concat(b , "how are you ?")) //concat is used to concatenate two strings


//strings are inmutable they cant be changd once they are created but we can use functions and modify them accordingly 
