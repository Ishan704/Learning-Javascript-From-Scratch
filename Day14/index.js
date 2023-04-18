function hello_world()
{
    console.log("Hello world");


}
hello_world();

function sayhi(name)
{
    console.log("Hi"+" "+name);
}
sayhi("Ishan");
sayhi("Ayush");
sayhi("Primathon");


function sayhiadvance(name,age){
    console.log("Hi"+" "+name+" "+"you are"+" "+age+" "+" years old");
}
var temp=sayhiadvance("Ishan",23);
console.log(temp);


function sayhelloadvance()
{
    return "hello world";
}
var temp=sayhelloadvance();
console.log(sayhelloadvance());
console.log(temp);


function add(a,b){
    console.log(a+b);
}
add(4,19);
add("1",2);
add("9","12");

function add2(){
    let sum=0;
    for(let i=0;i<arguments.length;i++)
    sum+=arguments[i];

    return sum;

}
console.log(add(2,4));

function average(a,b,fn)
{
    return fn(a,b)/2;
}
let result3=average(10,20,add2);
console.log(result3);