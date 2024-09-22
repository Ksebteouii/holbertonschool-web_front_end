function countPrimeNumbers() {
    let primeCount = 0;
  
    // Helper function to check if a number is prime
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    // Loop through numbers from 2 to 100 and count primes
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        primeCount++;
      }
    }
  
    return primeCount;
  }
  
  // Measure the execution time
  const startTime = performance.now(); // Get start time
  const primeCount = countPrimeNumbers();
  const endTime = performance.now();   // Get end time
  
  const executionTime = endTime - startTime; // Calculate time difference
  console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds`);