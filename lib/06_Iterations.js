const fruits = ['mango', 'pear', 'banana'];
// SEMI-COLUMN don't raise bugs if you forget them, but they are mandsatory in js
// they specify the end of a statement of code
// IN RUBY

// fruits.each do |fruit|
//  p fruit.upcase
// end


// IN JS

// fruits.forEach(); //first step
// fruits.forEach((parameter) => { // second step
// });

// fruits.forEach((fruit) => {
//    console.log(fruit.toUpperCase());
// });

// console.log(fruits);


 // WRITE AN EACH AND CREATE AN ARRAY OF FRUITS UPPERCASE
// const finalArray = [];

// fruits.forEach((fruit) => {
//   finalArray.push(fruit.toUpperCase());
// });

// console.log('original array:', fruits);
// console.log('final array uppercased:', finalArray);



// WRITE WITH MAP

const finalArray = fruits.map((fruit) => {
    return fruit.toUpperCase();
});


console.log(finalArray)



