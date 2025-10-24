//function
// // JavaScript
// // function add(a, b) {
// //   return a + b;
// // }

// // console.log(add("Hello","Welcome"));  //HelloWelcome

// // // TypeScript
// function add(a: number, b: number): number {
//   return a + b;
// }

// // console.log(add("Hello","Welcome"));  //error   but logs HelloWelcome

// // Function with typed parameters and return type
// function multiply(a: number, b: number): number {
//   return a * b;
// }

// // Function with void return
// function greet(name: string): void {
//   console.log(`Hello, ${name}`);
// }

// Optional parameter
// function say(message?: string): void {  //void retrun type
//   console.log(message || "Hi!");
// }
// say() //Hi!
// say("Vijay")  //Vijay

// //function with default parameters
// function multiply(a: number, b: number = 2): number {
//   return a * b;
// }

// multiply(5);    // 10  
// multiply(5, 3); // 15


// //function with rest paramters
// function sum(...numbers: number[]): number {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// sum(1, 2, 3, 4); // 10

// //function with union types(either this or that only)
// function format(input: string | number): string {
//   return `Value: ${input}`;
// }

// format("Hello"); // "Value: Hello"
// format(42);      // "Value: 42"


// function throwError(message: string): never { //always thows an error
//   throw new Error(message);
// }
// throwError("GG") throws error always
//unknow type argumenets
// function process(value: unknown) {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else if (typeof value === "number") {
//     console.log(value + 10);
//   } else {
//     console.log("Unsupported type");
//   }
// }

// process("Hello")  //HELLO
// process(1)  //11
// // process() //Unsupported type



// //function overloading
// function combine(a: number, b: number): number;
// function combine(a: string, b: string): string;
// function combine(a: any, b: any): any {
//   return a + b;
// }

// combine(1, 2);       // 3Unsupported type
// combine("Hello, ", "World"); // "Hello, World"

// //generic function -> reusable for multiple types
// function identity<T>(arg: T): T {
//   return arg;
// }

// identity<number>(5);    // 5
// identity<string>("Hi"); // "Hi"

// arrow functions with types

// const divide = (a: number, b: number): number => a / b;

// const greetUser: (name: string) => string = (name) => `Hello, ${name}`;

// console.log(divide(2,1))  //2