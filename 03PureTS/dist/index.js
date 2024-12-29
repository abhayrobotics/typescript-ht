"use strict";
console.log("typescript is wor king");
// classes\
// class User {
//     email:string;
//     name:string
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name =name;
//     }
// }
// method 2
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._userid = 1;
        this.city = "NC";
    }
    method1(name) {
        return 2;
    }
    // getter and setter
    get courseCount() {
        return `${this._userid} is cousre count`;
    }
    set courseCount(num) {
        if (num < this._userid) {
            console.log();
        }
    }
}
let abhay = new User("a@a", "Abhay");
