let arr = [ 0 , 7, 3, 9, 5 ] //is not sorted in ascending order.

arr[0]= 69; //change the first element of the array to 69.
console.log(arr);
console.log(arr.length);
console.log(arr.sort()); 

//arrrays are mutable and can be changed

console.log(arr[0])
console.log(arr[7]) // cause an error because the array only has 5 elements
console.log(arr[3])
 
console.log(typeof[arr]) // returns object cause arrays are objects in js


//methods of arrays 
console.log(arr.toString()); // convert array to string

console.log( arr.join(" and ", 30 , 0 ))

a = [ 1,2,3,4,5,6,]
console.log(a.pop())
console.log(a)
console.log(a.shift())
console.log(a)

console.log(a.push(7))
console.log(a)
console.log(a.unshift("lorry"))

console.log(a)

console.log(a.push("ankoor"))
console.log(a) 

delete a[5]
console.log(a)


let a1 = [6,8,9,5,7];
a1 = a1.concat(arr, a);
console.log(a1);


let a2 = a1.sice(0, 5 );
console.log(a2);
