const str="Ishan";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str.charCodeAt(3));
console.log(str.charCodeAt(2));
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(0));

console.log("hello".concat(4,5,6));

let query="Hello world";
console.log(query.endsWith("World"));
console.log(query.endsWith("world"));
console.log(query.endsWith("Hello"));
console.log(query.endsWith("orld",10));

const academy="Hello I am a student of primathon academy";
console.log(academy.split(" ").splice(0,4).join(" "));

let str1=academy.split(' ');
console.log(str1);
console.log(str1[0]);
console.log(str1[1]);
console.log(str1[2]);
let str2=str1.splice(0,6);
console.log(str2);
console.log(str2.join(' '));
let rced=academy.replace(/primathon/i,"w3schools");
console.log(rced);

try{
    let result=xyz(10,20);
    console.log(result);
}
catch(error)
{

}
console.log('Handled');
console.log("Handled");
let res=0;

try{
    result=add(12,3);
}
catch(e)
{
    console.log(e.message);
}
finally{
    console.log(res);
}


function fn()
{
    try{
        console.log(1);
        return 1;
    }
    catch{
        console.log(2);
        return 2;
    }
    finally{
        console.log(3);
        return 3;
    }
}
console.log(fn());