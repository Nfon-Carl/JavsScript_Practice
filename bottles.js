//99 bottles challenge

let count = 10;

function bottles(count) {
  console.log(
    count +
      " bottles of beer on the wall," +
      count +
      " bottles of beer \nTake one down and pass it round," +
      (count - 1) +
      " bottles of beer on the wall \n"
  );
}

while (count > 1) {
  bottles(count);

  count--;
}
