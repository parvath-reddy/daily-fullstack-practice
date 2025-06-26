// let obj = {
//     a : 1,
//     b : "ankoor"
// }
// console.log( obj);

// let animal = {
//     eats : true,
// };
// let rabbit = {
//     jumps : true,
// }
// rabbit.__proto__ = animal; // setting prototype


class animal {
    constructor(name) {
        this.name = name;
        console.log('object is created...');
        
        
    }
    eats() {
        console.log('Eating...');
    }
    jumps() {
        console.log('jumping...');
    }
}

class lion extends animal{
    constructor(name) {
        super(name); // calling parent class constructor
        console.log('lion is created...');
    }
     eats() {
        super.eats(); // calling parent class method , so using this methoid we can call both parent and child class method
        console.log('Eating...and roaring'); // this is called method over riding 

     }
}
let a = new animal("ankoor");
console.log(a);

let b = new lion("tar");
console.log(b);
