"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myobject = {
    name: "Abhay",
    email: "A@x.com",
    isPaid: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
//  function with object as parameter and also returns an object
function Object2() {
    return {};
}
var newUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
    return { result: true };
};
var abhay = {
    EmployeeId: "PIS!486",
    _id: ["zz"],
    name: "Abhay",
    email: "a@gmail.com"
};
abhay.name = "Raj";
// cannot assign to a readonly 
// abhay.EmployeeId ="as";
abhay._id.push("xx");
var card2 = {
    cardnumber: "1234",
    date: "12/12/2024",
    cvv: 123,
};
