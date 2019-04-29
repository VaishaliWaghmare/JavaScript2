// const isPrime = (nom)=>{
//   for(let i =2; i<nom; i++){
//     if(nom%i===0){
//       return false;
//     }
//   }
//   return true;
// }﻿

//2nd example
// function primeNumber(num)
// {
//   for(var i=2; i<num; i++)
//   {
//     if(num/1===0)
//     return false;
//   }
//   return true;
// }
// console.log(primeNumber(9));


//3rd example
  // isPrime(23);
  // function isPrime(num)
  // {
  //   var i;
  //   var num;
  //
  //   for(i=2; i<num; i++)
  //   {
  //     if(num%i===0)
  //     {
  //       document.write("This" + num + "is not a prime number");
  //       return false;
  //     }
  //     document.write("This" + num + "is a prime number");
  //     return true;
  //   }
  // }

  //4th example
  var a, b, c;
  a=parseInt(prompt("Enter a No."));
  b=2;
  c=0;
  while(b>a)
  {
    if(a%b==0)
    {
      c=1;
      break;
    }
    b=b+1;
  }

  if(c==0)
  {
    document.write("This is a prime no.");
  }
  else
  {
    document.write("This is not a prime no.");
  }
