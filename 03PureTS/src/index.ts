console.log("typescript is wor king");

// classes\

// class User {

//     email:string;
//     name:string
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name =name;
//     }
// }

// method 2
class User {
    private _userid  =1
   private city :string ="NC"
    constructor( public email:string, public name:string){
       
    }

    private method1(name:string):number{
        return 2;
    }

    // getter and setter

    get  courseCount():string{
        return `${this._userid} is cousre count`;
    }

    set courseCount(num:number){
        if(num < this._userid){
            console.log()
        }
    }
}

let abhay = new User ("a@a","Abhay")
