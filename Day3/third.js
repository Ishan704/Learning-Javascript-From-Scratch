var a=5 ;   //scope of this variable is global we can access it anywhere .
function sum()
{
    var c=a+8;
console.log(a);
var  b=6;   //scope of this varible is limited to this function we cannot access it outside.
}
sum();
//console.log(b);


// Let variables in javascript

let c=9; // scope of this variable is global
function todo(){
    console.log("let value of variable is="+c);
    {
        let d=10; //scope of this variable is block we cannot access it outside the block;
    }
    console.log(d);
}
todo();


//const variables in javascript

const value=12; //scope of this variable is global



function cons_value()
{
    console.log("Value of const Var is="+value);
 {
    const z=1;//block scope of this variable;

 }   
}
cons_value();