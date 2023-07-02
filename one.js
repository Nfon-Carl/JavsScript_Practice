//control flow
// leap year challenge

a = prompt("Imput year");

if (a % 4 === 0) {
  if (a % 100 === 0) {
    if (a % 400 === 0) {
      console.log("Leap Year");
    } else {
      console.log("Not a Leap");
    }
  } else {
    console.log("Leap Year");
  }
} else {
  console.log("Not a Leap");
}
