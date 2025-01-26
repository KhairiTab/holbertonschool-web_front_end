function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  function countPrimeNumbers() {
    let start = performance.now();
    let primeNumbers = [];
  
    for (let num = 2; num <= 100; num++) {
      if (isPrime(num)) {
        primeNumbers.push(num);
      }
    }
  
    console.log(
      "Execution time of printing countPrimeNumbers was " +
        (performance.now() - start) +
        " milliseconds."
    );
    return primeNumbers;
  }