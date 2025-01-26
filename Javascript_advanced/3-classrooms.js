/**
 * Creates a classroom with a specified number of students.
 *
 * @function createClassRoom
 * @param {number} numbersOfStudents - The number of students in the classroom.
 * @returns {Function[]} An array of functions, each returning the seat number of a student.
 */
function createClassRoom(numbersOfStudents) {
    // Inner function to create a closure for each seat
    function studentSeat(seat) {
      return function () {
        return seat; // Closure remembers the seat number
      };
    }
  
    // Array to hold the student seat functions
    const students = [];
  
    // Populate the students array with closures
    for (let i = 0; i < numbersOfStudents; i++) {
      students.push(studentSeat(i + 1)); // i + 1 to represent seat numbers starting from 1
    }
  
    return students; // Return the array of closures
  }
  
  // Create a classroom with 10 students
  const classRoom = createClassRoom(10);
  
  // Test the closures
  console.log(classRoom[0]()); // Output: 1 (seat 1)
  console.log(classRoom[4]()); // Output: 5 (seat 5)
  console.log(classRoom[9]()); // Output: 10 (seat 10)