"use strict";
class Camera {
    constructor(camera, burst) {
        this.camera = camera;
        this.burst = burst;
    }
    // but normal method has to be defineds
    getBlackNwhite() {
        return 8;
    }
}
// abstact class cannot have an object
// const ab = new Camera("iphone", "2")
class Mobile extends Camera {
    getSepia() {
        console.log("sepia filter done");
    }
    //    can be modified
    getBlackNwhite() {
        return 4;
    }
}
// but a class that inherit a abstract class can have a object instance.
const ab = new Mobile("iphone", "2");
let abhay2 = new Mobile("hw", "burst");
abhay2.getSepia();
abhay2.getBlackNwhite();
