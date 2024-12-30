"use strict";
// narrowing
// it means that when we have multiple data type , every data type must be handled, by narrowing anad chekcing each
function detect(val) {
    if (typeof val === "string") {
        val.toLowerCase();
        return;
    }
    return val + 3;
}
// here we used typeof property to narrow down each data type and check.
function f2(val) {
    // if not null , ie string
    if (!val) {
        return val;
    }
    val.toLowerCase();
}
// documentation example
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function checkAdminAccount(item) {
    if ("isAdmin" in item) {
        return item.isAdmin;
    }
}
// ! instanceof keyword
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //return shape.side * shape.side
}
// exhaustice checking with never
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
