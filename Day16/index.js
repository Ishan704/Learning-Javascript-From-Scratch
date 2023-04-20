let isRaining=true;
let issnowing=true;
let temp=40;
if(isRaining)
{
    if(temp>45)
    console.log("Wear light weight");
    else
    console.log("Wear Heavy weight");
}
else if(issnowing)
{
    if(temp>40)
    console.log("wear soft shell jacket");
}

let a=2;
switch(a){
    case 1:a='one';break;
    case 2:a='two';break;
    default:a='not found';break;
}
console.log(`The value of a is ${a}`);



//for(;;)
//console.log("hi");

let i=0;
//for(;i<5;i++)
//console.log("hi");

//for(;j<5)
//{
  //  console.log(j);
  //  j++;
//}

let k;
for(;k<5;k++)
console.log(k);

let n=4;
for(let i=10,j=1,k=0;j<n;j++)
{
 console.log(i);
}

for(let j=1;j+=2;)
{
    console.log(j);
    if(j>10)
    break;
}

for(let i=1;i<6;i++)
    console.log(i+5,i);



for(let j=5,k=1,l=2,m=3,n=4,x=5;j>0;)
{
    console.log(x,x-1+k,x-2+l,x-3+m,x-4+n);
    j-=1;
    k=0;
    l=0;
    m=0;
    n=0;
}
//program for sum of digits in num
let num=1234;
let sum=0;
while(num>0)
{
    let r=num%10;
    sum+=r;
    num=parseInt(num/10);
}
console.log(sum);
let mul=1;
num=1234;
while(num>0)
{
    let r=num%10;
    mul*=r;
    num=parseInt(num/10);
}
console.log(mul);
//program for multiply digits of number;
i=0;
while(i<5)
{
    console.log(i);
    i++;
}
i=2;
while(i<=10)
{
    console.log(i);
    i=i+2;
}
let z=0;
do{
    console.log("do");
    z++;

}while(z<3);

for(let i=0;i<=5;i++)
{
    for(let j=0;j<=i;j++)
    {//console.log("#");
    process.stdout.write("#");
   
}
console.log("\n");
}


//factorial of a number
let fac=1;
let number=5;
let ans=1;
for(let i=1;i<=number;i++)
{
    ans*=i;
}
console.log(ans);


//taking user input
const prompt=require('prompt-sync')()
a=prompt("Enter name");
console.log("a=",a);

let first,second;
let val=0;
first=parseInt(prompt("Enter first"));
second=parseInt(prompt("Enter sec"));
console.log(first+second);


//power program
let base=parseInt(prompt("enter base"));
let expo=parseInt(prompt("enter expo"));
let i=1;
let result=1;
while(i<=expo)
{
    result=result*base;
    i++;
}
console.log(result);