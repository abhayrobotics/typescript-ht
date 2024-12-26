"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function toUpper(val) {
    return val.toUpperCase();
}
toUpper("4");
addTwo(10);
// multiple Parameter
function signUp(name, email, isPaid) { }
signUp("Abhay", "abhay@x.com", true);
// default parameter for optional parameter
function signIn(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
signIn("abhay", "x@xcom");
// output type checking, return a number
function addThree(num) {
    "a";
    return "hello ";
}
addThree(6);
// using map
// const heros =["thor","ironman"]
var heros = [2, 4];
// here we see that input can change based on inferred value, but return should be a string.
heros.map(function (hero) {
    return "".concat(hero, " is an avenger");
});
//  return Void and never
var showError = function (val) {
    console.log(val);
};
// this never return a value , when a error is found
var handleError = function (errMsg) {
    throw new Error(errMsg);
};
console.log(showError("abhay"));
// this returns a undefined, as wb declare it as void
console.log(handleError("abhay"));
