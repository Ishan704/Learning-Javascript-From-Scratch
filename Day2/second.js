//Arithematic Operator
let a=10;
let b=2;

console.log("Addition=" +a+b); 
console.log("Subtraction=" +(b-a)); 
console.log("Multiplication="+a*b); 
console.log("Division="+b/a);
console.log("Division="+a/b);
console.log("Remainder"+a%b);
console.log("Remiander"+b%a);   
console.log("PreIncrement"+ ++a);
console.log("PreIncrement"+ ++b); 
let d=b--;
console.log("Post Increment" + d);


//Comparision operator
console.log(a<b);
console.log(a>b);

let c=10;
console.log(a>=c);
console.log(a<=c);

console.log(b!=c);

//Logical operator
console.log(a>c&&a>=c)
console.log(a>c||a>=c)




//Assignment operator
let value=6;
value+=a;
value-=a;
value*=a;
value&=a;
value^=a;

//Bitwise operator
let ans=a&c;
ans=a|c;
ans=a<<c;
ans=a>>c;