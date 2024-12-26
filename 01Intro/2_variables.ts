// syntax
// 
let myname :string ="Abhay";

const age:number =30;
const userid:number =22.55;
//! no  int or float  only number
console.log("Hello"+ myname);

// only methods applicable to string variable is suggested here.

myname.toLowerCase()
age.toFixed(2);


//! Any type

let hero ;
function getVariable(){
    return "Iron Man";

}
hero = getVariable();

// better way- as type cannot be inferred. 
let hero2:string ;
function getVariable2(){
    return "Iron Man";

}
hero = getVariable2();





export{}