// const age = 17;

// if (condition) {
//   branch_to_be_executed_if_condition_truthy
// } else if (condition) {
//   branch_to_be_executed_if_condition_falsey
// } else {

// }

// if (age >= 18) {
//   return "You can vote";
// } else {
//   return "You can't vote";
// }

// IN JS
// 6 FALSEY VALUES
// false
// undefined
// null
// 0
// NaN
// ""

// ternary operator : rule of thumb 80 chars
// const raining = true;
//  // condition ? when_truthy : when_falsey

// const result =  (raining ? "go out with umbrella" : 'chill with sunglasses'); //return is implicit here because inline statementt

// console.log(result);

let digit = ""; // empty string is falsey

// ALWAYS USE === for strict comparison
// == comparison is WEIRD, it does weird casting types

if (digit === 0) {
  console.log('Zero');
} else if (digit === 1) {
  console.log('One');
} else {
  console.log("I don't know this digit, sorry!");
}
























