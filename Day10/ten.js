//Array with four elements
const ans=[1,2,3,"ishan","ayush"];
const len =ans.length;
console.log("The length of ans is"+len);

//Array methods and properties
// concat() method is used to merge two array
const a1=['a','b','c']
const a2=['d','e','f']
const a3=a1.concat(a2);
console.log(a3);

//push() method is used to add element to the end of the array

const arr=[1,2,3,4,5];
arr.push(9);
arr.push(8);
arr.push(10);
console.log(arr);

//unshift add elements to the start

arr.unshift("Ishan");
arr.unshift("ayush");
arr.unshift("bro");
console.log(arr);


//pop method removes the last element from the array
arr.pop();
arr.pop();
arr.pop();

console.log(arr.length);


//shift () method removes first element from array
arr.shift();
arr.shift();


//find method returns the first element in the array that satisifies the providing testing condition if no value satisifes undefined is returned
const val=arr.find(element => element >90);
console.log(val);