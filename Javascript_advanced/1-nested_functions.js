
// Create a variable named globalVariable
let globalVariable = "Welcome";

// Create a function outer
function outer() {
  alert(globalVariable); // Alerts the content of globalVariable
  
  let course = "Holberton"; // Create a variable named course
  
  // Create a function inner
  function inner() {
    alert(globalVariable + " " + course); // Alerts globalVariable and course concatenated

    let exclamation = "!"; // Create a variable named exclamation

    // Create a function inception within inner
    function inception() {
      alert(globalVariable + " " + course + " " + exclamation); // Alerts globalVariable, course, and exclamation concatenated
    }

    // Call the function inception
    inception();
  }

  // Call the function inner
  inner();
}

// Call the function outer in the main code (outside any function)
outer();