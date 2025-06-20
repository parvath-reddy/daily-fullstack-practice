let a = [ 1, 4,5 ,6 ,7, 8,3]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}

a.forEach((value, index, arr) => {
    console.log(value, index, arr)
})

let obj ={
    x:3,
    y:4,
    z:5


}
// forin
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key , element)
        
    }
}

//forof 
for (const iterator of a) { 
    console.log(iterator)
    
}