
function divideBy(firstNumber) {
    return function(secondNumber) {
      return secondNumber / firstNumber;
    };
  }
  
  // Function to create an addBy closure
  function addBy(firstNumber) {
    return function(secondNumber) {
      return firstNumber + secondNumber;
    };
  }
  
  // Creating closures
  const addBy100 = addBy(100);
  const addBy1000 = addBy(1000);
  const divideBy10 = divideBy(10);
  const divideBy100 = divideBy(100);
  
  // Example usage:
  console.log(addBy100(50));   // Output: 150
  console.log(addBy1000(200)); // Output: 1200
  console.log(divideBy10(50)); // Output: 5
  console.log(divideBy100(500));// Output: 5