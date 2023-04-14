//findindex() method returns the index of the first element in array that satisifies the provided testing function if nk elements satisfy the testing function -1 is returned

const a1=[1,2,3,4,5];
const islarge=(val)=>val>13;
console.log(a1.findIndex(islarge));

const isgreater=(points)=>points<20;
console.log(a1.findIndex(isgreater));   //findindex() method

const isbelow=(value)=>value>0;
 console.log(a1.every(isbelow));  // every() method
 
 const a2=[1,3,5,7];
 const isany=(value)=>value%2==1;  //some()  method
 console.log(a2.some(isany));


 console.log(a2.join());
 console.log(a1.join('-'))  //join() method


 console.log(a2.includes(11));


 const reversed=a2.reverse();
 console.log(reversed);


 a2.forEach(ele=>console.log(ele));

 const map1=a1.map(r=>r*2);
 console.log(map1);

 let daily=['ea','ean'];
 console.log(daily.sort());
 console.log(daily.indexOf('ea'));