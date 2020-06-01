const student = {
  firstName: "Boris",
  'lastName': "Paillard"
};


// keys are always strings
// no symbol in js
// object is a hash, comes from JSOn notation

console.log(typeof(student));
console.log(student);

// CRUD

// CREATE
// first way of doing
  // student['age'] = 23;
  // console.log(student)
// second way of doing
   // student.age = 23;
   // console.log(student);

// READ
  // first way of doing
  // console.log(student.firstName);
  // second of doing
  // console.log(student['firstName']);

// UPDATE
  student.lastName = 'le wagon';
  console.log(student);

  student['firstName'] = 'batch 413';
  console.log(student);

// DELETE
// delete(value_you_want_to_delete)
delete(student['lastName']);
console.log(student);
