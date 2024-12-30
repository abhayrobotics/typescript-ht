// narrowing
// it means that when we have multiple data type , every data type must be handled, by narrowing anad chekcing each

function detect(val: string | number) {
  if (typeof val === "string") {
    val.toLowerCase();
    return;
  }

  return val + 3;
}

// here we used typeof property to narrow down each data type and check.

function f2(val: string | null) {
  // if not null , ie string
  if (!val) {
    return val;
  }
  val.toLowerCase();
}

// documentation example
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

//! in keyword use  in narrowing

interface User {
  name: string;
  email: string;
}

interface Admin extends User {
  isAdmin: boolean;
}

function checkAdminAccount(item: User | Admin) {
  if ("isAdmin" in item) {
    return item.isAdmin;
  }
}

// ! instanceof keyword
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}


// !  is and as keyword , type precates watch documentation
type Fish = { swim: () => void };
type Bird = { Fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}


// ! Discriminated unions


interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    //return shape.side * shape.side
}


// exhaustice checking with never

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width

        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}