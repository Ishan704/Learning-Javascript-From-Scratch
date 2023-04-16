//let result=add(10,20);// this line will give error
//console.log(result);//

//try{
    //code may cause error
//}catch(error)
//{
   //code to handle error
//}


try{
    let result=add(10,20);
    console.log(result);
}catch(e){
    console.log({name:e.name,message:e.message})
}
console.log("bye");

//try catch finally

let result=0;
try{
    result=add(10,20);
}
catch(e)
{
    console.log(e.message);
}
finally{
    console.log(result);
}

const add=(x,y)=>x+y;
let res=0;
try{
    result=add(10,20);
}
catch(e){
    console.log(e.messsage);
}
finally{
    console.log(result);
}