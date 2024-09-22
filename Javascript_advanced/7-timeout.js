console.log('Start of the execution queue');

// Using setTimeout to log after the loop with a delay of 0
setTimeout(() => {
  console.log('Final code block to be executed');
}, 0);

// Loop that iterates 100 times and logs the iteration number
for (let i = 1; i <= 100; i++) {
  console.log(`Iteration number: ${i}`);
}

console.log('End of the loop printing');