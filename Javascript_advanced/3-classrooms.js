function createClassRoom(numbersOfStudents ){

}
function studentSeat(seat){
    return function() {
        return seat; // Return the seat number
};
}
let students = [];
for (let i = 0; i < numbersOfStudents; i++) {
  students.push(studentSeat(i + 1)); {
}
return students; // Return the array of student functions
}
const classRoom = createClassRoom(10);

// Example of using the classRoom array to get seat numbers
console.log(classRoom[0]()); // Outputs: 1
console.log(classRoom[1]()); // Outputs: 2
console.log(classRoom[9]()); // Outputs: 10