// Example data representing students' scores on exams
const students = [
    { name: 'Alice', scores: [80, 90, 85] },
    { name: 'Bob', scores: [70, 60, 65] },
    { name: 'Charlie', scores: [95, 85, 90] },
  ];
  
  // Function to check if any student has passed all exams
  function hasAnyStudentPassedAllExams() {
    // Check if any student's scores meet the passing criteria for all exams
    const anyPassedAllExams = students.some(student =>
      student.scores.every(score => score >= 70)
    );
  
    return anyPassedAllExams;
  }
  
  // Test the function
  console.log('Has any student passed all exams?', hasAnyStudentPassedAllExams());
  