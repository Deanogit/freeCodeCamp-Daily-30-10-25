// Nth Prime
// A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. The first five prime numbers are 2, 3, 5, 7, and 11.

// Given a positive integer n, return the nth prime number. For example, given 5 return the 5th prime number: 11.

function nthPrime(n) {
  console.log(n);
  const arr = [];

  // helper function to find primes
  function isPrime(num) {
    // Start at 2, check if any number up to the square root of num divides it evenly
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // counter while true
  let candidate = 2;
  let count = 0;
  while (count < n) {
    if (isPrime(candidate)) {
      count++;
    }
    if (count < n) {
      candidate++;
    }
    return candidate;
  }

  //  for (let i = 0; i < n; i++) {
  //    if ( i % 1 === 0 && i % i === 0) {
  //      arr.push(i)
  //    }
  //  }
  // divisible by one and itself
  //  if (n % 1 === 0 && n % n === 0) {
  //    console.log("Prime")
  //   }
  //  console.log(arr)
  // return n;
}
