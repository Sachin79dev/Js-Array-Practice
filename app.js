//Printing first and last value of an array 

let arr = ["apple", "banana", "grapes", "melons", "mango"];


console.log(arr[0]);
console.log(arr[arr.length - 1]);


// Finding the length of an array 
console.log(arr.length);



// adding value in array using push
arr.push("Guava")

console.log(arr);


// removing value from last in array using pop
arr.pop()

console.log(arr); // (5) ['apple', 'banana', 'grapes', 'melons', 'mango']


// adding value from starting in array using unshift


arr.unshift("kiwi")

console.log(arr);// (6) ['kiwi', 'apple', 'banana', 'grapes', 'melons', 'mango']



// removing value from starting in array using shift


arr.shift("kiwi")

console.log(arr); // (5) ['apple', 'banana', 'grapes', 'melons', 'mango']
