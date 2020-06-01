// ARRAYS in js

const fruits = ['mango', 'pear', 'banana']
// you declare it as a const because the allocation in memory of the array will remain the same

console.log('initial array of fruits:', fruits)
// CRUD

// CREATE
fruits.push('apple')
console.log(fruits)

// READ
console.log(fruits[1]);

// UPDATE
fruits[0] = 'passion fruit'
console.log(fruits)

// DELETE
// fruits.splice(index_of_start, number_of_elements)
fruits.splice(1,2)
console.log(fruits)
