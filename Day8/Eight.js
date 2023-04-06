const score=90;
if(score>=80)
console.log("Greater than 80")
else
console.log("Less than 80");
//next  if block 
if(10>5)
console.log("IF BLOCK");
//Next if else condition

if("cat"=="dog")
console.log("IF BLOCK");
else
console.log("ELSE BLOCK");

//next IF-ELSE 

if(false)
console.log("IF  BLOCK ");
else if(true)
console.log("ELSE IF BLOCK ");
else
console.log("ELSE BLOCK ");

//next if-else statement
if(false)
console.log("IF BLOCK");
else if(true)
console.log("First if else");
else if(true)
console.log("Second else if");
else
console.log("else block");

//switch statement

let a=2;
switch(a)
{
    case 1:
        a="one";
        break;
    case 2:
        a="two";
        break;
    case 3:
        a="not found";
        break;
    
}
console.log("The value is ="+a);


//To check if number is odd or even in javascript
let num=2;
if(num%2==0)
console.log("EVEN");
else
console.log("(ODD");


//to check whether value is a number or not
let value=23;
switch(value)
{
    case 1:console.log("Number is 1");break;
    case 2:console.log("Number is 2");break;
    case 3:console.log("Number is 3");break;
    case 4:console.log("Number is 4");break;
    case 5:console.log("Number is 5");break;
    case 6:console.log("Number is 6");break;
    case 7:console.log("Number is 7");break;
    case 8:console.log("Number is 8");break;
    case 9:console.log("Number is 9");break;
    case 0:console.log("Number is 0");break;
    default:console.log("Not a Number");
} 