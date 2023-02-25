//155. The Magic of Chaining Methods

const INR = [100, 200, 300, 400, 5000]

const TotalINR = INR.reduce((acc , paisa )=> acc +paisa ,0)
console.log(TotalINR)
const USD = 82.90;
console.log("Total Paisa into USD = " +TotalINR * USD)

//PIPELINE BOlte
const convertINRToUSD = INR.filter(paisa => paisa > 0).
map(paisa => paisa * USD ).
reduce((acc, paisa) => acc + paisa, 0);

console.log(convertINRToUSD)

//===========================================

//PIPELINE  :::: Print arr
const convertINRToUSD1 = INR.filter(paisa => paisa > 0).
map((paisa, i, arr) => {
    console.log(arr )
    return  paisa * USD }).reduce((acc, paisa) => acc + paisa, 0);

console.log(convertINRToUSD1)

//===========================================

//PIPELINE  :::: Print arr
const convertINRToUSD2 = function(INR){
  const value   =INR.filter(paisa => paisa > 0).
map((paisa, i, arr) => {
    console.log(arr )
    return  paisa * USD }).reduce((acc, paisa) => acc + paisa, 0);
    return value;
}

console.log(convertINRToUSD2)