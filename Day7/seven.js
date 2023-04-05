function say(messg){
    if(!messg){
        let greeting="Hello";
        console.log(greeting);
    }

//console.log(greeting);
}
//say();

var text="outside";
function logit(){
    console.log(text);
    var text="inside";
};
logit();



function foo()
{
    let a=b=0;
    a++;
    return a;
}
foo();
typeof a;
typeof b;


const name="workattech";
function printname(){
    console.log(name);
}
printname();


function printname(){
   
    const name="workattech";
    console.log(name);
}
printname();
let x=5;
if(x==5)
{
    const a=x;
    console.log(a);
}
//console.log(a);

const one="Global";
function first(){
const two="Outer";
function sec(){
    const three="work";
    console.log(three);
    console.log(two);
    console.log(one);
    
}
sec();
}
first();