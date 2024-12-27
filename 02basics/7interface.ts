

interface User {
    readonly id :number,
    name: string,
    email:string,
    goofleID ?: string,

    getStart: ()=> string,
    getStart2() :string,
    
    getCode(codeName:string): number
    
    
}

// reopening of interface / adding new fields
interface User {
    githubLogin :string 
}

let AB :User ={
    id:23,
    name:'Abhay',
    email: "a@x.com",
    githubLogin:"Abhayrobotics",
    getStart :()=>{
        return "Hell"
    },
    
    getStart2 :()=>{
        return "Hell"
    },
    getCode:(code:"get10")=>{
        return 10;
    },

}
// inheritance like classes

interface Admin extends User{
    admin: "Yes" | "No",
}

let AB2 :Admin ={
    id:23,
    admin:"Yes",
    name:'Abhay',
    email: "a@x.com",
    githubLogin:"Abhayrobotics",
    getStart :()=>{
        return "Hell"
    },
    
    getStart2 :()=>{
        return "Hell"
    },
    getCode:(code:"get10")=>{
        return 10;
    },

}

type Interview ={
    name:string,
    getFood():string
}

let Raj:Interview ={
    getFood() {
        return "hell"
    },
    name:"ABhay"
}




export {}
