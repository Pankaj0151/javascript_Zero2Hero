// //1 Create a arrow function To cal avg of 3

// function calcAverage1(a, b, c) {

//     return (a + b + c) / 3;
// }
// console.log(calcAverage1(1, 2, 3));

const calAverageVar = (a, b, c) => (a + b + c) / 3;
//console.log(calAverageVar(1, 2, 2));
const calAvg = (a, b) => (a + b) / 2;

const scoreDolphin = calAverageVar(44, 23, 71)
console.log(scoreDolphin);

const scoreKolas = calAverageVar(65, 54, 49)
console.log(scoreKolas);

const scoreDolphin2 = calAverageVar(85, 54, 41)
console.log(scoreDolphin2);

const scoreKolas2 = calAverageVar(23, 34, 27)
console.log(scoreKolas2);

const FirstMatchAvg = calAvg(scoreDolphin, scoreKolas)
const secondMatchAvg = calAvg(scoreDolphin2, scoreKolas2)

console.log("1st Match avg ++++++ "+FirstMatchAvg);
console.log("2nd Match avg ++++++ "+secondMatchAvg);
