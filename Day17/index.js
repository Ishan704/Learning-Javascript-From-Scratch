//program to find num of digits in number
let num=1234566789;
let count=0;
while(num>0){
    count++;
    num=parseInt(num/10);
    //console.log(count)

}
console.log(count);


let one="Ishan";
let sec="Ayush";
let third="swara";
let four="puchi";

//better soln
let arr=["Ishan","  Ayush","swara","puchi",1,2,3,4,5,6,7,[1,2,3,4,5,6,6,7,8,9]];

console.log(arr[0]+" "+arr[4]+" "+arr[3]+" "+arr[6]+" "+arr[11][1]);
console.log(arr.length);


let a1=[1,2,3];
let a2=[4,5,6];
let a3=[7,8,9];
let a4=a1.concat(a2);
console.log(a4);

a4.push(11);
console.log(a4);


const animals=['Tiger','goat','sheeep'];
animals.push('cows');

animals.unshift("hen");


const data=[5,12,8,130,44];
const found=data.find(x=>x<10);
console.log(found);

const islargenum=(element)=>element>13;
console.log(data.findIndex(islargenum));
const isbelow=(cv)=>cv<150;
console.log(data.every(isbelow));


const even=(ele)=>ele%2===0;
console.log(data.some(even));


const elements=['fire','air','water'];
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'))
console.log(elements.reverse());

const elem=data.map(x=>x*10);
console.log(elem);

const word=["spray","limit","elite","destruction"];
console.log(word.filter(word=>word.length>10));

console.log(word.slice(0,4))

let cl="btn";
cl+="btn-primary";
cl+="none";
console.log(cl);

console.log(2+true);
console.log(2001+"hi");
console.log(2+3+4+"foo");
console.log(2+3+4+"fo"+2+2);
console.log(2+3+4+"fo"+2*2);
console.log("10"*4);

//javascript objects cannot be compared
const str="IamIshanSethi"
console.log(str.slice(0,4));
console.log(str.slice(2,-5));


str1="primathon  academy";
str1.replace('academy','tech')
console.log(str1);