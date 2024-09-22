function countPrimeNumbers() {
    let primeCount = 0;

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            primeCount++;
        }
    }

    return primeCount;
}

// Measure the execution time for 100 executions
const startTime = performance.now(); // Get start time

// Execute the function 100 times
for (let i = 0; i < 100; i++) {
    countPrimeNumbers(); // Execute the function
}

// Use setTimeout to defer the timing calculation to the end of the stack
setTimeout(() => {
    const endTime = performance.now(); // Get end time
    const executionTime = endTime - startTime; // Calculate time difference
    console.log(`Execution time of executing countPrimeNumbers 100 times was ${executionTime} milliseconds`);
}, 0);