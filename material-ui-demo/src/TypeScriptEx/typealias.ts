// //type ->same for defining types but more flexible than interface ex-object shapes(similar to interface),primitives, tuples, union types,
// //object type 
// type User = {
//   id: number;
//   name: string;
//   isAdmin?: boolean;
// };

// const user: User = { id: 1, name: "Vijay" };
// console.log(user);  //{ id: 1, name: 'Vijay' }

// type Status = "success" | "error" | "loading";

// let currentStatus: Status;
// currentStatus = "success"; // works
// currentStatus = "pending"; //  Error

// //primitive types
// type ID = string | number;

// let userId: ID;
// userId = 123;      // works
// userId = "abc123"; // works
// // userId= {  //error 
// //   id1:234,
// //   id2:123
// // }

// // userId =true //error

// //funtion type 
// type Greet = (name: string) => string;  //argument type string, return type string

// const sayHi: Greet = (name) => `Hi, ${name}!`;

// console.log(sayHi("Vijay")); //  Hi, Vijay!
// // console.log(sayHi(1));  //warning but still logs  Hi, 1!

