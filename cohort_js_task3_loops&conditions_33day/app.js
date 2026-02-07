// Level 1 Pure Beginners Practice Questions

// 1. Print numbers from 1 to 10 Loop from 1 to 10 and print each numbers.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 2. Print only even numbers from 1 to 20, use a loop and conditon to print only even ones.

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 3. Print numbers from 10 to 1 Reverse loop with a decrement.

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// 4. Print the word "Yes" 5 times Repeat using a loop.

// for(let i = 1; i <= 5; i++){
//     console.log("Yes");
// }

// 5. Print whether numbers from 1 to 10 are even or odd, For each number, check -> "Even", else -> "odd".

// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0) console.log(i ,": Even");
//     else console.log(i,": Odd");
// }

// 6. Ask user for a number and say if it's positive or negative, Use prompt() and a conditional.

// let num = prompt("Enter Any Number:");

// if (num === null) {
//   console.error("You prassed cancel");
// } else {
//   if (num.trim() === "") console.error("You have nothing typed and prassed ok");
//   else {
//     num = parseInt(num.trim());
//     if (isNaN(num)) console.error("Write a Number");
//     else if (num <= -1) console.log(`${num} is negative`);
//     else console.log(`${num} is positive`);
//   }
// }

// 7. Ask user’s age and check if eligible to vote, If age >= 18 → “Eligible”, else → “Not eligible”

// function checkAge() {
//   let age = prompt("Enter Your Age:");

//   if (age === null) return console.error("You cancelled it");
//   age = age.trim();
//   if (!age) return console.error("Write your age");
//   age = parseInt(age);
//   if (isNaN(age)) {
//     console.error("Write your age");
//   } else if (age >= 18) {
//     console.log("Eligible");
//   } else {
//     console.log("Not Eligible");
//   }
// }

// checkAge();

// 8. Print multiplication table of 5, Use loop to print 5 × 1 to 5 × 10.

// for (let i = 1; i <= 10; i++){
//   console.log(`5 * ${i} = ${5 * i}`);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8, Loop and count conditionally.

// let count = 0;

// for (let i = 1; i <= 15; i++) {
//   if (i > 8) console.log(`${++count} ${i}`);
// }

// 10. Ask user for password and print access status, Hardcoded correct password. Compare with user input.

// const password = "secret123";

// let inputPass = prompt("Enter Your Password: ");

// inputPass = inputPass.trim();

// if (inputPass === "") console.error("Enter Yuor Password");
// else if (inputPass === password) console.log("Access Granted");
// else console.error("Access Denied");

// Level 2 – Slightly Tougher but Logical

// 11. Allow only 3 attempts to enter correct password, If user gets it right early, stop. If not → “Account locked”

// const password = "secret123";

// for (let i = 3; i >= 0; i--) {
//   if (i < 1) {
//     console.error("“Account Locked");
//     break;
//   } else {
//     let inputPass = prompt("Enter Your Password");
//     if(inputPass === null) break;
//     inputPass = inputPass.trim();

//     if (password === inputPass) {
//       console.log("Access Granted! Welcome Back");
//       break;
//     } else {
//       alert(`Wrong Password - attempt ${i - 1}, At least 3 attempts!`);
//     }
//   }
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”, Loop until "stop" is typed. Count "yes".

// let count = 0;

// let word = "";

// while(true){

//     word = prompt("Enter a word (or type stop to finish): ");

//     if(word.trim().toLowerCase() === "stop"){
//         console.error("user typed stop");
//         break;
//     }
//     else if(word.trim().toLowerCase() === "yes") {
//         ++count;
//         continue;
//     }
// }

// console.log(`You typed "yes" ${count} times`);

// 13. Print numbers divisible by 7 from 1 to 50, Use modulo % and loop.

// for (let i = 1; i <= 50; i++) {
//   if (i % 7 === 0) console.log(i);
// }

// 14. Sum of all odd numbers from 1 to 30, Add only odd numbers. Print final sum.

// let odd = 0;

// for (let i = 1; i <= 30; i++){
//     if (i % 2 !== 0) odd += i;
// }

// console.log(odd);

// 15. Keep asking number until user enters an even number, Use while loop. Stop only if input is even.

// let num = 0;

// while (true) {
//   num = prompt("Enter a number (if you want to stop, type 'even' number): ");
//   if (num === null) {
//     console.error("User cancelled the process.");
//     break;
//   }
//   if (num.trim() === "") {
//     console.error("You clicked ok without Entering any number");
//     continue;
//   }

//   num = parseInt(num);

//   if (isNaN(num)) {
//     console.error("That's not a number!");
//     continue;
//   }
//   if (num % 2 === 0) break;
// }

// 16. Print numbers between two user inputs, Input start and end using prompt() → print all between.

// let start = +prompt("Enter start number: ");
// let end = +prompt("Enter end number: ");

// while (start <= end) {
//     console.log(start);
//     start++;
// }

// 17. Print only first 3 odd numbers from 1 to 20, Use loop. Stop with break after 3 odd prints.

// let oddCount = 0;

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//       console.log(i);
//     oddCount++;
//     if (oddCount >= 3) {
//       break;
//     }
//   }
// }

// 18. Ask user 5 numbers. Count how many are positive, Use loop + condition + counter.

// let count = 0;

// let num = 0;

// for (let i = 1; i <= 5; i++) {
//   num = +prompt("Enter 5 numbers: ");

//   if (num > 0) {
//     count++;
//   }
// }

// console.log(`You have Entered ${count} time positive number`);

// 19. ATM Simulator – Allow 3 withdrawals, Start with ₹1000 balance. Ask withdrawal amount 3 times. If enough balance → deduct, Else → print “Insufficient balance”

// let balance = 1000;

// let withdrawalAmt = 0;

// for (let i = 1; i <= 3; i++) {
//   withdrawalAmt = +prompt("Enter withdrawal Amount: ₹");

//   if (withdrawalAmt <= balance) {
//     alert("Deducted!");
//     balance -= withdrawalAmt;
//   } else {
//     console.error("Insufficient Balance!");
//     break;
//   }
// }
