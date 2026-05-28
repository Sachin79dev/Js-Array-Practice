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



// reversing array using reverse method 


let arr2 = arr.reverse()


console.log(arr2); // (5) ['mango', 'melons', 'grapes', 'banana', 'apple']




// sorting array in ascending order


let asc = [4, 9, 3, 8, 4, 2, 5, 0, 6,]


console.log(asc.sort()); // (9) [0, 2, 3, 4, 4, 5, 6, 8, 9]



// sorting array in descending order


let dsc = [4, 9, 3, 8, 4, 2, 5, 0, 6,]


console.log(dsc.sort().reverse()); // (9) [9, 8, 6, 5, 4, 4, 3, 2, 0]




// Using splice method in array

let rem = [1, 2, 3, 4, 5, 6, 7]

rem.splice(2, 4)

console.log(rem);


rem.splice(2, 0, 8, 9, 10)

console.log(rem);


// Using slice method in array


let sel = rem.slice(0, rem.length)

console.log(sel); //(6) [1, 2, 8, 9, 10, 7]

console.log(rem.indexOf(10)); // 4





// checking wether array contains a value


if (sel.includes(8)) {
    console.log(`it has`);
}else {
    console.log(`it does not have`);
}




// using join method to join array using space

let char = ["sachin", "singh", "frontend", "Develoepr"]


// char.join(" ")

console.log(char.join(" ").toUpperCase()); // SACHIN SINGH FRONTEND DEVELOEPR



// merging two arrays using spread operator


let one = [4, 5, 3, 1, 2]
let two = [7, 9, 8, 6]


let merge = [...one, ...two]

console.log(merge.sort()); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

// finding maximum value from an arary using Math.max method
console.log(Math.max(...merge)); // 9



// forEach function to double an array element

let dbl = [2, 3, 5]


let dbl2 = dbl.forEach((n) => {
    console.log(n*2);
})


// forEach function to double an array element

let dbl = [2, 3, 5]


let dbl2 = dbl.forEach((n) => {
    console.log(n*2); // 4, 6, 10
})



// map function for squaring the numbers of an array

let int = [2, 3, 4, 5, 6]


let sqrt = int.map((n) => {
    return n*n
})


console.log(sqrt); // (5) [4, 9, 16, 25, 36]




// filter function to find even numbers

let sin = [1, 2, 3, 4, 5, 6, 7]

let even = sin.filter(function (n) {
    if (n%2 == 0) {
        return n
    }
})

console.log(even); // (3) [2, 4, 6]




// reduce function to sum the given array 

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sums = nums.reduce((acc, idx) => {
    return acc + idx
}, 0)

console.log(sums); // 55



// reduce function to find the largest from an array of numbers
let big = nums.reduce((acc, idx) => {
    return idx > acc ? idx : acc
})


console.log(big);





// find function to get the first even number from an array of numbers

let firstEven = nums.find((n) => {
    return n%2 === 0;
})


console.log(firstEven); //2 



// find function to get the first largest number from an array of numbers


let firstIndex = nums.findIndex((n) => {
    return n > 5
})


console.log(firstIndex); // 6



// some function to get if the number on an array is negative 


let negative = [-2, -1, 0, 1, 2]


let ifneg = negative.some((n) => {
    return n < 0
})


console.log(ifneg);



// Every function to get if numbers are negative or not 


let ifneg1 = negative.every((n) => {
    return n < 0
})


console.log(ifneg1); // false


// array of names and converting all to uppercase

let namesArr = ["sachin", "priyanka", "vijay", "santosh", "priyam"]

let capNames = namesArr.map((n) => {
    return n.toUpperCase()
})


console.log(capNames); // (5) ['SACHIN', 'PRIYANKA', 'VIJAY', 'SANTOSH', 'PRIYAM']



// filtering students marks > 80 

const students = [
  { name: "Sachin", marks: 75 },
  { name: "Priyanka", marks: 92 },
  { name: "Vijay", marks: 81 },
  { name: "Santosh", marks: 68 }
];



let marksObt = students.filter((n) => {
    return n.marks > 80 
})


console.log(marksObt);
console.log(students);
