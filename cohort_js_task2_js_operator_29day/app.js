console.log("connected");

// 1-a

// const a = 10;
// const b = 3;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

//-------------------------------

// 1-b

// let x = 5;
// x = x + 3;

// console.log(x);

// x += 3;
// console.log(x);

// x -= 3;

// console.log(x);

// x *= 3;
// console.log(x);

// x /= 3;
// console.log(x);

//---------------------------------

// 1-c

// let count = 5;

//before
// console.log(count++);

//after
// console.log(count);

//before
// console.log(count--);

//after
// console.log(count);

//--------------------------------

// 1-e

// console.log(10 > 5);
// console.log(10 < 20);
// console.log(10 === 10);

//--------------------------------

// 1-f

// console.log(true && false);
// console.log(true || false);
// console.log(!true);

//----------------------------------

// 1-g

// console.log(5 > 3 && 10 > 8);
// console.log(5 > 3 || 10 < 8);

//--------------------------------

// 1-h

// console.log(5 & 1);
// console.log(5 | 1);

//===================================

// 2-a

// console.log(a);
// var a = 10;

//--------------------------------

// 2-b

// console.log(b);
// let b = 10;

//--------------------------------

// 2-c

// test()
// function test() { console.log("Hello") }

//---------------------------------------

// 2-d

// hello();
// var hello = function () {
//   console.log("Hi");
// };

//=======================================

// 3-a

// const age = Number(prompt("Age?"));
// if (age > 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

//--------------------------------------

// 3-b

// const marks = Number(prompt("Marks?"));

// if (marks >= 90) {
//   console.log("A grade");
// } else if (marks >= 75) {
//   console.log("B grade");
// } else if (marks >= 50) {
//   console.log("C grade");
// } else {
//   console.log("Fail");
// }

//--------------------------------------

// 3-c

// const city = prompt("Enter City name in CapitalCase:");

// if (city === "Bhopal") {
//   console.log("MP");
// } else if (city === "Delhi") {
//   console.log("Capital");
// } else {
//   console.log("Unknown City");
// }

//--------------------------------------

// 3-d

// let score = 40;
// const result = score > 35 ? "Pass" : "Fail";

// console.log(result);

//----------------------------------

// 3-e

// const temperature = 40;
// const result = temperature > 30 ? "Hot" : "Pleasant";

// console.log(result);

//--------------------------------

// 3-f

// const dayNum = Number(prompt("Day Number?"));

// switch (dayNum) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid Day");
// }

//----------------------------------------

// 3-g

const age = 19;
const country = "India";

if (age >= 18 && country === "India") {
  console.log("Eligible for Vote");
} else {
  console.log("Not Eligible");
}
