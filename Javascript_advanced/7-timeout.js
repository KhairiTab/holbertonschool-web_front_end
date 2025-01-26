// Define the class as a function 
function studentHogwarts() {
    // Private variables - only accessible within this function scope
    let privateScore = 0;
    let name = null;

    // Private method - can access private variables
    function changeScoreBy(points){
        privateScore += points;
    }

    // Return an object with 4 public methods
    return {

        // Method to set student's name
        setName: function(newName) {
            name = newName;
        },

        // Method to reward student (increases score by 1)
        rewardStudent: function() {
            changeScoreBy(1);
        },

        // Method to penalize student (decreases score by 1)
        penalizeStudent: function() {
            changeScoreBy(-1);
        },

        // Method to get student's name and score
        getScore: function() {
            console.log(`${name}: ${privateScore}`);
        }
    }
}

// Create instance for Harry
const harry = studentHogwarts();

// Set the name of the object to Harry
harry.setName("Harry");

// Reward Harry 4 times
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

// Log to the console the name and score
harry.getScore();

// Create instance for Draco
const draco = studentHogwarts();

// Set the name of the object to Draco
draco.setName("Draco");

// Reward the Draco one time
draco.rewardStudent();

// Penalize Draco three times
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

// Log to the console the name and score
draco.getScore();

/**
 * 
Executing the code should display in the console:
    Harry: 4
    Draco: -2
*/


/**
 * Let's break down how this works:
 * 🚨 1- Privacy through Closure
 * When we define privateScore and name inside the function, they become private
 * They can't be accessed from outside, only through the methods we provide
 * 
 * 🚨 2- Private Method
 * `changeScoreBy` is only accessible within the class
 * It's used by both rewardStudent and penalizeStudent
 * It can't be called directly from outside
 * 
 * 🚨 3- Public Interface:
    - The returned object contains four methods that can be called from outside
    - These methods are the only way to interact with the private variables
    - This is known as encapsulation in object-oriented programming
*/