// TypeScript (TS) is a superset of JavaScript created by Microsoft that adds static typing to JS.
//why ts -> early error detection, clearer code(other devs know what kind of data to expect)

// Example
// let name: string = "John";
// name = 42; // error-> Type 'number' is not assignable to type 'string'

// basic types:
// string->	"hello"	-> Text data
// number->	42, 3.14	All numeric values (int + float)
// boolean	->true / false	Logical values
// any	->Any type	Turns off type checking (avoid using too much because might cause in error)
// unknown	-> Any type but must be checked before use	Safer alternative to any
// TypeScript is a compile-time check, not a runtime enforcement.

// Warnings/errors in TS prevent mistakes before your code runs, but JS will still execute even if types are violated

// let username: string = "Vijay";
// let age: number = 25;
// let isAdmin: boolean = true;
// let data: any = 123;        // any : disables type safety & can have any type of value
// let value: unknown = "Hi";  // doesnt know what value can be checked before using for type safety
// //example before using unknown value check the type to avoid errors
// if (typeof value === "string") {
//   console.log(value.toUpperCase()); 
// }
// let value: any = "This is a string";
// let lengthOfString: number = (value as string).length;

// console.log(lengthOfString);   //16


