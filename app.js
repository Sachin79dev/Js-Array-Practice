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

