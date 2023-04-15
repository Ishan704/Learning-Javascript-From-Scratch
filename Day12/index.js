//using single quotes
const fname='primathon';
//using double quotes
const lname="ishan"

//string method
const one=String(undefined);
const two=String(null);
const three=String(false);


//string object using new keyword
const name=new String("I am String object")

//As Js is case sensitive lower case and uppercase are treated differently
const name1='Primathon'
const name2="primathon"
console.log(name1==name2);

//string concatenation can be done using + operator
console.log(name1+'academy');

let classname='btn';
classname+=name1;
classname+=name2;
classname+='bro';
console.log(classname);

console.log(2+1);
console.log(2+true);
console.log(2+"=two");
console.log('foo'+false);


//comparision of strings using == operator
let x1='Hiii';
let x2='Hiii'
let x3=new String('Hiii')
console.log(x1===x2);
console.log(x1===x3);


let x4=new String('Hiii');
console.log("Comparing two js objects returns false");
console.log(x1===x4);

//length property
console.log(x4.length)

//methods of extracting part of the string 
//slice (start,end)

const  word="Primathon Academy"
console.log(word.slice(0,5));
console.log(word.slice(3));
console.log(word.slice(-1));
console.log(word.slice(-2));
console.log(word.slice(-3));

console.log("substring methods");
console.log(word.substring(4));
console.log(word.substring(0,4));


const first="hello world";
console.log("The 1st index char="+first.charAt(0));
console.log("The 2nd index char="+first.charAt(1));
console.log("The 3rd index char="+first.charAt(2));
console.log("The 4th index char="+first.charAt(3));
//console.log("The character code of h is equal to"+first.charCodeAt(3))

console.log(first.toUpperCase());
console.log(first.toLowerCase());


//to string method is used to convert string object to a string
const str=new String("Hello world");
console.log(str.toString());

const our="               Hello world                "
console.log(our.trim());