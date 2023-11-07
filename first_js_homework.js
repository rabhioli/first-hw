//************** section 1
// 1. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code
// DRY is an abbreviation for "Don't Repeat Yourself." we are encouraged by a software development philosophy to refrain from repeating code inside a project. 
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


//*******************section 3

//Is the code below an infinite loop? Why or why not?
// This is a infinite loop because the code will keep doing the same thing over and over again forever because it's told to. Its like a broken record that wont
//stop unless you tell it to.

//is this loop an infinite loop? Why or why not?
//yes because, the program tries to change a value that it's not allowed to change. It's like trying to rewrite a rule that can't be changed. Because of this, 
// the loop will keep running forever, and you'll need to stop it manually.
//their would be a syntax error

let letters = "A";
//let letters = "A" This initializes a variable letters with the value "A"
let i = 0;
//let i = 0 This initializes a variable i with the value 0.
while (i < 20) {
//while (i < 20) {: This is the start of a while loop. It specifies that the loop will continue executing as long as the condition i < 20 is true.
	letters += "A";
//Inside the loop, this line appends another "A" to the letters string. So, in each iteration, it adds an "A" to the end of the existing string.
	i++;
//This increments the value of i by 1 in each iteration.

}
//This marks the end of the while loop.


//******************************** section 4
//A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
//A for loop is like when you know exactly how many times you need to do something, like doing a task 5 times. 
//A while loop is for when you're not sure how many times you'll need to do something, and you keep doing it as long as a certain condition is true, 
//like saying "keep doing this until I say stop". Both loops are ways to repeat tasks, like chores or homework.

for (let i = 0; i <= 999; i++) {
    console.log(i);
  }
  for (let i = 999; i >= 0; i--) {
    console.log(i);
  }
  for (let i = 1; i <= 10; i++) {
    console.log("Current value of i is: " + i);
  }
  
  const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
  for (let i = 0; i < StarWars.length; i++) {
    console.log(StarWars[i]);
  }
  for (let i = 0; i < StarWars.length; i++) {
    console.log(`Character ${i}: ${StarWars[i]}`);
  }

//***********************section 5
//# Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt
//mkdir galaxy_far_far_away
//mkdir death_star
//touch darth_vader.txt
//touch princess_leia.txt
//touch storm_trooper.txt
//cd galaxy_far_far_away
//mkdir tatooine
//touch luke.txt
//touch ben_kenobi.txt
//cd tatooine
//mkdir millenium_falcon
//cd millenium_falcon
//touch han_solo.txt
//touch chewbaca.txt
//mv ben_kenobi.txt obi_wan.txt
//cp death_star/storm_trooper.txt tatooine/
//mv luke.txt obi_wan.txt millenium_falcon/
//mv tatooine/millenium_falcon galaxy_far_far_away/
//mv galaxy_far_far_away/millenium_falcon death_star/
// princess_leia.txt death_star/millenium_falcon/
//rm death_star/obi_wan.txt
// mkdirgalaxy_far_far_away/yavin_4
//mv death_star/millenium_falcon galaxy_far_far_away/yavin_4/
//mkdir galaxy_far_far_away/yavin_4/x_wing
//mv galaxy_far_far_away/yavin_4/millenium_falcon/princess_leia.txt galaxy_far_far_away/yavin_4/
//mv galaxy_far_far_away/yavin_4/x_wing/luke.txt galaxy_far_far_away/yavin_4/x_wing/ 
//mv galaxy_far_far_away/yavin_4/millenium_falcon galaxy_far_far_away/
//mv galaxy_far_far_away/yavin_4/x_wing galaxy_far_far_away/
//mkdir death_star/tie_fighter_1 death_star/tie_fighter_2 death_star/tie_fighter_3
//mv death_star/darth_vader.txt death_star/tie_fighter_1/
//cp death_star/storm_trooper.txt death_star/tie_fighter_2/
//cp death_star/storm_trooper.txt death_star/tie_fighter_3/
//mv death_star/tie_fighter_1 death_star/tie_fighter_2 death_star/tie_fighter_3 galaxy_far_far_away/
//rm galaxy_far_far_away/tie_fighter_2/* galaxy_far_far_away/tie_fighter_3/*
//touch galaxy_far_far_away/x_wing/the_force.txt
//mv galaxy_far_far_away/x_wing galaxy_far_far_away/yavin_4/
//mv galaxy_far_far_away/millenium_falcon galaxy_far_far_away/yavin_4/

