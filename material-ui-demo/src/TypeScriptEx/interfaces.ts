//interface is used to define the shape of object — what properties it has and their types.

// example

// interface User {
//   id: number;
//   name: string;
//   isAdmin: boolean;
// }

// const user1: User = {  //here interface ensures user1 must have id, name, and isAdmin with the correct types.
//   id: 1,
//   name: "Vijay",
//   isAdmin: true
// };

//optional properties
// interface User {
//   id: number;
//   name: string;
//   isAdmin?: boolean; // optional
// }

// const user2: User = {
//   id: 2,
//   name: "Bob" // isAdmin is optional
// };

//functions in interfaces
// interface Person {
//   name: string;
//   greet: (message: string) => void;
// }

// const person: Person = {
//   name: "Charlie",
//   greet: (msg) => console.log(msg)
// };

// person.greet("Hello!"); //  "Hello!"
// interface Person{
//   readonly id:number,
//   readonly name:string,
//   phoneno:number
// }

// let p1 :Person ={
//   id:123,
//   name:"Vijay",
//   phoneno:61283474362
// }

// console.log(p1) //{ id: 123, name: 'Vijay', phoneno: 61283474362 }
// // p1.id=234 //error can't assign to readonly property
// p1.phoneno = 1098273098//no error

// //inheritance
// interface Animal {
//   species: string;
// }

// interface Dog extends Animal {
//   breed: string;
// }

// const myDog: Dog = {
//   species: "Canine",
//   breed: "Labrador"
// };

// console.log(myDog.breed); //Labrador

//in ts interfaces can extend class
class Person {
    public name: string='';
}

interface Details extends Person {
    details(): void;
}

class Person_Details extends Person implements Details {
    age: any;
    details(): void {
        this.name = "Vijay";
        this.age=21
        console.log(this.name,this.age);
    }
}

let object = new Person_Details();
object.details();


