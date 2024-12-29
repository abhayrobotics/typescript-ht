abstract class Camera {
    constructor(
        public camera :string,
        public burst :string
    ){

    }
    // abstract method need not be defined in abstract class but needs to be defined in inherited class
   abstract getSepia():void;

    // but normal method has to be defineds
   getBlackNwhite():number{
    return 8;
   }
}

// abstact class cannot have an object
// const ab = new Camera("iphone", "2")

class Mobile extends Camera{
   getSepia(): void {
       console.log("sepia filter done");
       
   } 
//    can be modified
   getBlackNwhite(): number {
       return 4;
   }
}
// but a class that inherit a abstract class can have a object instance.
const ab = new Mobile("iphone", "2")

let abhay2  = new Mobile("hw","burst");
abhay2.getSepia()
abhay2.getBlackNwhite()