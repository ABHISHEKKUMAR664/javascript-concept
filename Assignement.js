console.log("hello")
    
//1. Create a function that sorts and outputs the 3 numbers passed as arguments using
//conditional statements. example :
//sort(17, 23, 9)// should output 9, 17, 23
//---sol-------->

// function sort(x,y,z){
    
//     if (x<y && x<z)
//     {
//             if (y<z)
//             {
//                 console.log(x + ", " + y + ", " +z);
//             }
//             else
//             {
//                 console.log(x + ", " + z + ", " +y);
//             }
//     }
//     else if (y<x && y <z)
//     {
//             if (x<z)
//             {
//                  console.log(y + ", " + x + ", " +z);
//             }
//             else
//             {
//                  console.log(y + ", " + z + ", " +x);
//             }
//     }
//     else if (z<x && z<y)
//     {
//             if (x<y)
//             {
//                 console.log(z + ", " + x + ", " +y);
//             }
//             else
//             {
//                 console.log(z + ", " + y + ", " +x);
//             }
//     }        
   
// }

// let x=-2;
// let y=8;
// let z= 4;

// sort(x,y,z)


//2. Rewrite the following block of code using ternary operator :
//if (x === 5) { return “Found 5”; }
//else if (x === 10 ) { return “Found 10”; }
//else if (x === 20) { return “Found 20”; }
//else { return “Some other value”; }


//---sol------->
// let x=10
// x === 5 ? console.log("Found 5") :
//  (  x ===10 ? console.log("Found 10") : 
//      (   x===20 ? console.log("Found 20") : console.log("Some other value")  ))




// 3. Create a function which designs the following sort of pattern when number is passed as
// argument. example :
// design(3)
// //should output
// *
// * *
// * * *
// * *
// *

//---sol-------->
// let n=3;
// let string="";

// for(let i = 1 ; i<=n; i++){
//       for(let j=1 ; j<=i;j++){
//           string +="*";
//       }
//       string += "\n";
// }
// for(let i=1 ; i<= n-1 ; i++){
//     for(let j=n-1 ; j>=i ; j--){
//         string +="*";
//     }
//     string += "\n";

// }
// console.log(string)  ;
