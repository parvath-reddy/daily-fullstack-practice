console.log(" lfg a tutorial on loops ")

let a = 1;
console.log(a)
console.log(a + 1)
console.log(a + 2)

//there are 5 types of loops in js
//1. for loop (its a normal for loop)
for (let i = 0; i < 100; i++) {
    console.log(a + i)

}
//4. for in loop ( used for objects)

let obj = {
    name: "john",
    age: 25,
    country: "usa"
}
for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

//5. for of loop (used for arrays,strings )

for (const c of "ankoor") {
    console.log(c)

}



//2. while loop (used when we dont know how many times we need to loop)

let p = 0;
while (p < 11)
    {
        console.log(p)
        p++;
        }


//3. do while loop (used a lot less ) (used when we need to run the loop at least once) , no mater if it is true or false the loop will for sure run once 
let r = 100;
do {
    console.log(r)
    r++; 
} while (r<10);



