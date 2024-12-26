function addTwo(num: number) {
  return num + 2;
}

function toUpper(val: string) {
  return val.toUpperCase();
}

toUpper("4");
addTwo(10);

// multiple Parameter
function signUp(name: string, email: string, isPaid: boolean) {}

signUp("Abhay", "abhay@x.com", true);

// default parameter for optional parameter

function signIn(name: string, email: string, isPaid: boolean = false) {}

signIn("abhay", "x@xcom");

// output type checking, return a number

function addThree(num: number): string {
  "a";

  return "hello ";
}

addThree(6);

// using map

// const heros =["thor","ironman"]
const heros = [2, 4];

// here we see that input can change based on inferred value, but return should be a string.
heros.map((hero): string => {
  return `${hero} is an avenger`;
});

//  return Void and never

const showError = (val: string): void => {
  console.log(val);
};

// this never return a value , when a error is found
const handleError = (errMsg: string): never => {
  throw new Error(errMsg);
};

console.log(showError("abhay"));
// this returns a undefined, as wb declare it as void

console.log(handleError("abhay"));
// above code returns a error, as t can never return , but we are using a value for returning.


export {};
