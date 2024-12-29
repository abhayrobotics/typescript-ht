"use strict";
// using implements make it mandatory to follow the rules.protocol made in the interface like Takephoto,story
// this brings consistency
class Instagram {
    constructor(cameraMode, burst) {
        this.cameraMode = cameraMode;
        this.burst = burst;
    }
}
class YouTube {
    constructor(cameraMode, burst) {
        this.cameraMode = cameraMode;
        this.burst = burst;
    }
    getStory() {
        return " ";
    }
}
