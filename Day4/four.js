//variable name must start with  either a letter ,underscore , _ or dollar sign .
let a="hello ";  //valid
let _a="bro";   //valid
let $a="hi";   // valid
// let 123qw="by";  //Invalid


//Javascript is case sensitive so Y and X are different variables
let y=4;
let Y =5;
// Both y are different

//keywords cannot be used as variable name


// let new=7; //invalid because new is reserved


//constant type of variables values cannot be changed once assigned.we cannot declare a constant without initialising it
// const x;// invalid 


//predict the output
var value=10;
{
    var value=-10;
}
console.log(value);
let b=value;
{
    let b=-20;
    console.log(b);

}
console.log(b);
 
//predict the output
for(var i=0;i<3;i++)
{
    console.log(i);
}
console.log('i value outside '+i);
for(let j=0;j<3;j++)
console.log(j);

//console.log("j value outside"+j);

//console.log("value of qy="+qy);
qy=2;
console.log("value of my="+my);
var my=3;


z=3;
console.log("value of z="+z);
var z;

//var one=1;
//let one;
//console.log("value of one="+one);


//console.log(let_var);
//let let_var=2;







function hoistexample(){
    var a;
    console.log("Before a="+a);
    a=10;
    console.log("After a"+a);
}
hoistexample();




function hoisting(){
    console.log("value of a  in hoisting program"+hoistingvar);
}
console.log("value of a on global scope"+hoistingvar);
var hoistingvar=1;
hoisting();


function hoisting2(){
     var vari=12;
}
//hoisting2();
//console.log(vari);




function fun()
{
    console.log("first call");
}
fun();
function fun()
{
    console.log("second call");

}
fun();