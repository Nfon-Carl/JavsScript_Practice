function FibonacciGenerator(n) {
  n.push(0);
  n.push(1);

  next = n[n.length] + n[n.length - 1];
  len = n.length;
  n.push(next);
  console.log(n[0]);
  console.log(len);
}

FibonacciGenerator([]);
