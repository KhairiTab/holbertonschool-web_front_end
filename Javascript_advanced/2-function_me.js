function welcomeMessage(fullName) {
    // Outer function that creates a closure
    return function () {
      // Inner function (closure)
      alert(`Welcome ${fullName}`);
    };
  }
  
  // Creating variables with closures
  let guillaume = welcomeMessage("Guillaume");
  let alex = welcomeMessage("Alex");
  let fred = welcomeMessage("Fred");
  
  // Testing in the console
  guillaume(); // Alerts: Welcome Guillaume
  alex(); // Alerts: Welcome Alex
  fred(); // Alerts: Welcome Fred