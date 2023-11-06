// 1. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code
// DRY is an abbreviation for "Don't Repeat Yourself." Developers are encouraged by a software development philosophy to refrain from repeating code inside a project. 
// The goal is to build code in a reusable, modular fashion so that updates or changesmay be done just once, minimizing the possibility of inconsistencies and simplifying 
// codebase maintenance. 

// 2.What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
// const, let, and var are all keywords used to declare variables in JavaScript. The main difference between them is the scope and mutability of the variables they declare.
// const variables are block-scoped and immutable, meaning they cannot be reassigned once they are declared. let variables are also block-scoped, but they can be reassigned. var variables are function-scoped and can be reassigned and redeclared.

//***************************Section 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log(a < b);  // true
console.log(c > d);  // true
console.log('Name' === 'Name');  // true
console.log(a < b && b < c);  // true
console.log(a === a && a !== d);  // true
console.log(e === 'Kevin');  // false
console.log(48 == '48');  // true
console.log(f === e);  // false
let g = 0;
console.log(g);  // 0
g = b + c;
console.log(g);  // 110

//Because let allows for reassignment—which is important in this situation because g is initially assigned the value of 0 and then reassigned the value of b + c—I used 
//let to declare the variable g in the provided code.An error will appear if you type 10 = g. It is not possible to provide a literal in JavaScript a value (in this example, the number 10).
// A variable should have a value assigned to it, such as g = 10. This will set the variable g's value to 10


//section 3

//Is the code below an infinite loop? Why or why not?
// This is a infinite loop because the code will keep doing the same thing over and over again forever because it's told to. Its like a broken record that wont
//stop unless you tell it to.

//is this loop an infinite loop? Why or why not?
//yes because, the program tries to change a value that it's not allowed to change. It's like trying to rewrite a rule that can't be changed. Because of this, 
// the loop will keep running forever, and you'll need to stop it manually.
//their would be a syntax error

