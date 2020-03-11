class User {

    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.lenght < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }

}

let user = new User("Johan ");
console.log(user.name); // John

user = new User("nama"); // Name is too short.