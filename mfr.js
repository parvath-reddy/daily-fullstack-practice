//this is the standerd way 
let arr = [1 , 13, 5, 4, 34 ]
let newarr=[]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element**2)
    
}
console.log(newarr)

//now the new way 
let arr2 = [1 , 13, 5,0 ,2, 4, 34 ]
let newarr2 = arr2.map((element) =>
    element**2
)
console.log(newarr2)  //this is the new way of doing it 



let newarr3 = [1,2,3,4,5,6,7,8,9] 
const greaterThenSeven = (e)=>{ // this is findiing the greater then number  
    if(e>7){
        return true
    }
    return false

}

console.log(newarr3.filter(greaterThenSeven))


//redce  method
let newarr4 = [1,2,3,4,5,6,]
const red = ( a , b ) =>{
    return a + b
}

console.log(newarr4.reduce(red)) //this is the sum of all the numbers in the array

console.log(Array.from("ankoor"))



