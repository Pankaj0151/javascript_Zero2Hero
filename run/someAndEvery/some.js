//161. some and every

const arr = [1, 2, 4, 5, 6, 7]
const arr2 = [1, 2, 4, 5, 56, 6, 7, 'Pankaj', 'chinu', 'Scam']

console.log(arr.includes('Pankaj'))

// Some is similar to includes to find a value in array with particular condition like <,> , *
const aaheKa = arr.some(varr => varr === 'chinu')
console.log(aaheKa)

const max = arr.some(arryV => arryV >= 7)
console.log(max)

//Using Includes
if (arr.includes('Scam')) {
    console.log('scam in if block')
}
else (arr2.includes('Scam'))
{
    console.log(' scam in else block')
}

//Using Some
if (arr.some(acc => acc === 'chinu')) {
    console.log("Chinu in IF block")
}
else (arr2.some(acc2 => acc2 === 'Scam'))
{
    console.log("Scam in else block")
} 

//======================================
 let amount = 100;
if ( amount > 0 && arr.some( arV => arV  > amount* 0.1))
console.log("Yes")
else
console.log("NOped : less than 10")


//Every 
const Every = arr.some(Every => Every >= 4)
console.log("Every:         " + Every)
//========================================

//Separate CallBack
const arr3 = [1, 2, 4, 5, 56, 6, 7, 'Pankaj', 'chinu', 'Scam']

const operation = (abc => abc > 4);

console.log("Some using callback : " + arr3.some(operation))
console.log("every using callback : " + arr3.every(operation)) ///Keh raha he False hun maiii
console.log("filter using callback : " + arr3.filter(operation))


//==================
//Every 
const vv = arr3.some(v => v > 4)
console.log("Every:         " + vv)