class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short");
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
console.log(user.name);  // Shows "John"

user = new User("");  // Alerts "Name is too short"

user.name =-"ankoor"
console.log(user.name);  // Shows "ankoor"