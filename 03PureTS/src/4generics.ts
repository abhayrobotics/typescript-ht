// generics
// as the name suggest rather than creating functions for each data type , we create a generic data type which takes all types of input but also the controls that the output data type will change with the type of input. 


// a function that takes a data type number and returns same data type
function IdentityOne(val:number):number{
    return val;
}

function IdentityTwo(val:string | boolean):string | boolean{
    return val;
}

function IdentityThree(val:any):any{
    return val;
}

// in the above ex , what could be the issue that a number may get as input and a string may output with no error, what we desire is that same data type is taken as input and the same is returned,
// method -1
function IdentityFour<Type>(val:Type):Type{
    return val;
}
IdentityFour("er")
IdentityFour(4)

// method-2  and next syntax
function IdentityFive<T>(val:T):T{
    return val;
}

interface Bottle {
    length:number,
    volume :number
}

function IdentitySix<Bottle>(val:Bottle):Bottle{
    return val;
}

IdentitySix({legth:12,volume:100});

//! generics in array

function IdentitySeven<T>(val:T[]):T{
    const index =3;
    return  val[2];

}
// above we see that input is an array of type T and output is T.
// so any value of array val[2] is of type T

function IdentityEight<T>(val:T[]):T[]{
    const index =3;
    return  val;

}

// arrow function syntax 

const  IdentityNine =<T> (val:T[]):T=>{
    return val[2];
}

// below syntax is same as above but used when using react , to differenciate between a componen and generic array.
const  IdentityTen =<T,> (val:T[]):T=>{
    return val[2];
}

// multiple generics

function IdentityEleven <T,U>(val1:T,val2:U):object{
    return {val1,val2}
} 
IdentityEleven(5,3)

interface Database{
    name:string,
    pass:string
}
// ! extends can be used in generics variable also
// type U is generic but can be defined also 
function IdentityTwelve <T,U extends Database>(val1:T,val2:U):object{
    return {val1,val2}
} 
// this wont work
// IdentityTwelve(5,3)

IdentityTwelve(5,{name:"as",pass:"as"})

// documentation example:
// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//     return obj[key];
//   }
   
//   let x = { a: 1, b: 2, c: 3, d: 4 };
   
//   getProperty(x, "a");

// ! Use of genrics in classes

interface Quiz{
    name:string,
    totalQuestions:number
}

interface Courses {
    name:string,
    author:string 
}

class SellableItems <T>{
    public cart:T[] =[];

    addToCart(item:T){
        this.cart.push(item)
    }

}

// the above Class take generic input can be quiz or courses and tocart for selling 