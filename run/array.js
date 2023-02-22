// //var filterArray =   arr.filter()
// var array = ["abc","asd","Pankaj"];

// try {
//     console.log(array[6]);
//     }
//   catch(e) {
//     throw new TypeError(Thi);
// }
// finally{
//     console.log("Execute any how");
// }
// array.forEach(element => {
//     if (element !== "Pankaj") {
//         console.log(" not Pankaj matched")
//     }
//     else{
//         throw new TypeError("Speak on Behalf Should not matched")
//     }
// });

// try {
//     var a = 123;   // or, test it with number 123

//     if (typeof a === "string") {
//       console.log("equel");
//     } else {
//       throw new TypeError("not equel")
//     }

//   } catch (e) {
//     console.log(e);
//     errLogs.push(e);
//   }

var bill;
var tip;
function calTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
console.log(calTip(100));
// console.log(tip);
// console.log(`The Bill is ${bill}​​ , The Tip is ${tip}​​ , The total value is  ${bill + tip}​​`)

var scam = "123";
