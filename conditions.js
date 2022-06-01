// I can add a comment like that 

/*
 * I can add a comment also like that
 * to have multilines comment
 * 
 * */


/*
* Examples of how to print the result
*
* */

const a = 10;
const b = 30;
const sum = a + b;

console.log(a + b);

console.log("sum of a and b is equal to ", a + b);
// also sum variable can be printed
console.log("sum of a and b is equal to ", sum);

// info
console.info("I can print some information");
// error
console.error("I can inform about an error");


/*
* Examples of the assingments operators
*
* */

const MATH_PI = 3.14;
const radius = 10;
const result = MATH_PI * radius * radius;

// shorter way to change a value;
let result1 = 10 * 10;
result1 *= MATH_PI;

// decrease a value
const a2 = 10;
const b2 = 20;
let c2 = 40;

c2 = c2 - a2;
// the same operation, shorter way
c2 -= a2;

c2 = c2 + b2;
// the same operation, shorter way
c2+= b2;
// strings operations
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;


/*
* Examples of the reconciliation operators
*
* */

const MATH_PI_2 = 3.14;
const radius2 = 10;
const name = "Robert";

// comparison
console.log(MATH_PI_2 === 3.14);

console.log(name === "Steven");

// numbers comparison
console.log(radius2 > 10);
console.log(radius2 >= 10);
console.log(radius2 < 100);
console.log(radius2 !== 0);


/*
* Examples of the Ternary operator
*
* */

const MATH_PI_3 = 3.14;
const radius3 = 10;
const formula = 'circumference';


// ternary
const result2 = formula === 'circumference'
	? MATH_PI_3 * (2 * radius3)
	: MATH_PI_3 * (radius3 * radius3);


/*
* Examples of the Logical operators 
*
* */

const MATH_PI_4 = 3.14;
const r = 10;
const name2 = "Robert";


console.log(name !== "Steven");

// usind 'and'
const res = MATH_PI_4 === 3.14 && radius >= 10
	? MATH_PI_4 * (2 * r)
	: MATH_PI_4 * (r * r);
      
console.log("result ", res);

// using  'not' and 'or'
const res2 = radius !== 0 || radius < 1000
	? MATH_PI_4 * (2 * r)
	: MATH_PI_4 * (r * r);
      
console.log("result 2 ", res2);


/*
* Examples of the if-else if-else operators
*
* */

const a3 = 10;
const b3 = 100;
const c3 = 3;

// example with if
if (a3 === 10) {
   console.log("a is equal 10");
}

// example with if..else
if (b3 > 1) {
   console.log("b is bigger than 1");
} else {
   console.log("b is smaller than 1");
}

// example with else...if
if (c3 > 1) {
   console.log("c is bigger than 1");
} else if (c3 == 10) {
   console.log("c is equal 10");
} else {
   console.log("c is smaller than 1");
}


/*
* Examples of the swith operator
*
* */

const day = "10";

switch (day) {
  case "10": {
      console.log("It is true");
  } 
  break;
    
  case "11": {
      console.log("It is true");
  } 
  break;
    
  default: {
      console.log("It is true");
  } 
}
