"use strict";
// generics
// a function that takes a data type number and returns same data type
function IdentityOne(val) {
    return val;
}
function IdentityTwo(val) {
    return val;
}
function IdentityThree(val) {
    return val;
}
// in the above ex , what could be the issue that a number may get as input and a string may output with no error, what we desire is that same data type is taken as input and the same is returned,
// method -1
function IdentityFour(val) {
    return val;
}
IdentityFour("er");
IdentityFour(4);
// method-2  and next syntax
function IdentityFive(val) {
    return val;
}
