function calculateGrade() {
    // Prompt the user for input
    var input = prompt("Enter the student's marks (0-100):");
  
  // Check if the input is a valid number within the range
  if (isNaN(marks) || marks < 0 || marks > 100) {
    alert("Invalid input! Please enter a valid number between 0 and 100.");
  } else {
    // Determine the grade based on the input marks
    var grade;
    
    if (marks > 79) {
      grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
      grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
      grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
      grade = 'D';
    } else {
      grade = 'E';
    }
    alert("Student's grade: " + grade);
  }
}
calculateGrade();