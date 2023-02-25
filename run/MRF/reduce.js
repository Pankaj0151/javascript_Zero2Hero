//Reduce using arrow Function
let mine = [200, 2, -2, 21, 2, -900, 1000]

const mArrow = mine.reduce((acc, cur) => acc + cur, 0);
console.log(mArrow)
//=================================================================

//Reduce using arrow Function
const add = mine.reduce(function (acc, cur, i, arr) {
    console.log(`${i} of ${arr[i]}`)
    return acc + cur;
}, 0);
console.log(add)

//=================================================================

//Using For loop
let acc = 0;
for (const iterator of mine) {
    acc += iterator;
}
console.log(` Using For loop  : ${acc}`)

//=================================================================
// max

const max = mine.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
}, mine[0]
);

console.log(max)

//=================================================================
// min

const min = mine.reduce((acc, mov) => {
    if (acc < mov) return acc;
    else return mov;
}
    , mine[0])
console.log(min);