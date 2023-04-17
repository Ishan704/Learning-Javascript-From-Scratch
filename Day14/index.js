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