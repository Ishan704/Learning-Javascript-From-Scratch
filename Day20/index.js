function sum(a,b){

console.log(a+b);
}
sum(10,23);
function calarea(width,height)
{
    return width*height;
}
console.log(calarea(10,20));

function sayhi()
{
    console.log("say hii");
}
sayhi(10,20,30,40);

function sayhi(name)
{
    console.log(`hi ${name}`);
}
sayhi("primathon");

const data="primathon";
sayhi(data);

function info(name,data)
{
    console.log("hi your name is  "+name+"  and you are "+data +"  years old");
}
info();

function into(a,b)
{
    console.log(a*b);
}
into(10,20);
into(20,'a');



function sayhello(name)
{
    return "hello"+name;
}
const value=sayhello('primamthon');
console.log(value);

const square=(x)=>{
    console.log(x*x);
}
square(5);

//hcf program
let num1=60;
let num2=72;
let hcf;
for(let i=0;i<num1&&i<num2;i++)
{
    if(num1%i===0&&num2%i===0)
    hcf=i;
}
console.log("HCF of num1 and num2 is=",hcf);


//fibonacci 
let a=0;
let b=1;
let n=7;let num=0;
for(i=2;i<n;i++)
{
    num=a+b;
    a=b;
    b=num;
}
console.log(num);