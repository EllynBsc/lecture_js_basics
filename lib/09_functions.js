// OLD WAY OF WRITING FUNCTION

  // function square(x) {
  //   return x * x; // you need the keyword return otherwise always udnefined
  // // return is explicit
  // }

  // console.log(square(5));

// NEW WAY: ARROW FUNCTION, SYNTAX OF ES6 (MODERN SYNTAX)

// const square = (x) => {
// // to do return the square of the parameter
//  return x * x;
// }

// this variable square is the name of your function
// when you invoke it nameOfFunction(argument)

// console.log(square(4));
// We don't say calling a method
// we say calling a function/invoking a function


// INLINE SHORT FUNCTION, return will be IMPLICIT

const square = (x) => x * x;
console.log(square(4));
