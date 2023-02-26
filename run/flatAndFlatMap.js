//162. flat and flatMap
let arrayValue = [3, 4,5 ,[4,8,9]]
const arrayFLat = arrayValue.flat();
console.log(arrayFLat);  // [  1, 2 , 3, 4, 5, 4, 8, 9 ]

//========================

arr = [[[1,2],3], 4,5 ,[4,8,9]]
const all = arr.flat(1);
const all2 = arr.flat(2);

console.log(all);  // [  1, 2 , 3, 4, 5, 4, 8, 9 ]
console.log(all2);

