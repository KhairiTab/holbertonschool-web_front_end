let globalVariable = "Welcome"; // Declare a global variable with the value "Welcome"

function outer() {
  alert(globalVariable); // Alert the value of the global variable "Welcome"
  
  let course = "Holberton"; // Declare a local variable "course" with the value "Holberton"

  function inner() {
    alert(globalVariable + " " + course); // Alert the concatenated value of globalVariable and course: "Welcome Holberton"
    
    let exclamation = "!"; // Declare a local variable "exclamation" with the value "!"
    
    function inception() {
      // Declare a function inside "inner" to access all outer scopes
      alert(globalVariable + " " + course + exclamation); // Alert the concatenated value: "Welcome Holberton!"
    }
    
    inception(); // Call the function inception
  }

  inner(); // Call the function inner
}

outer(); // Call the function outer