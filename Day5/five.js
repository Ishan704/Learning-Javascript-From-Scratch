var test=1;
function functionhoisting(){
    console.log("In function");
    test=10;
    return;
    function test(){

    }
}
//functionhoisting();
//console.log("value of test="+test);
//alert("gi");
//alert(a());
function a(){
    var b=function()
    {return 3;}

return b();
var b=function(){
    return 9;

};
}


function foo(n){
    if(n==6)
    {
        let num=3;

    }
    console.log(num);
}
var n=7;
console.log(n);
//foo(6);




