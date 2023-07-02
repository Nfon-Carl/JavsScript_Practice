// //control flow
// // leap year challenge

// a = prompt("Imput year");

// if (a % 4 === 0) {
//   if (a % 100 === 0) {
//     if (a % 400 === 0) {
//       console.log("Leap Year");
//     } else {
//       console.log("Not a Leap");
//     }
//   } else {
//     console.log("Leap Year");
//   }
// } else {
//   console.log("Not a Leap");
// }

let a = [];
let count = 1;
function fizzBuzz() {
  //code

  if (a % 3 === 0) {
    a.push("Fizz");
  } else if (a % 5 === 0) {
    a.push("Buzz");
  } else if ((a % 3 === 0) & (a % 5 === 0)) {
    a.push("fizzBuzz");
  } else {
    a.push(count);
  }

  count++;
  console.log(a);
}

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
