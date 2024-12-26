 let myobject  ={
    name:"Abhay",
    email:"A@x.com",
    isPaid :true
 }

 function createUser ({name:string,isPaid:boolean}){

 }

//  function with object as parameter and also returns an object

function Object2 ():{}{

return {}
}

let newUser = ({name:string,isPaid:boolean}):{result:boolean}=>{
return {result:true}
}



//! read only and optional
type Employee = {
   readonly EmployeeId :string;
   readonly _id :string[];
   name:string
   email: string
   dob ?: string
}

let abhay:Employee ={
   EmployeeId: "PIS!486",
   _id :["zz"],
   name:"Abhay",
   email:"a@gmail.com"

}
abhay.name ="Raj";
// cannot assign to a readonly 
// abhay.EmployeeId ="as";
abhay._id.push("xx");

// readonly array can be modified but string cannot be modified

// ! & and |

type cardNumber = {
   cardnumber  :string
}

type CardDate ={
   date :string
}

type CardDetails = cardNumber &  CardDate & {cvv:number} 
let card2 :CardDetails ={
   cardnumber: "1234",
   date :"12/12/2024",
   cvv :123,
   
}
type cardPassword = string | number


export {}