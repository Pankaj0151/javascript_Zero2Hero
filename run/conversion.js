
console.log(Boolean(0))
console.log(Boolean(10))
console.log(Boolean(undefined))
console.log(Boolean(''))
console.log(Boolean(NaN))
console.log(Boolean(null))

let scam = 100;
if (scam) {
    console.log("In True Scam Block")
}
else {
    console.log("In Falsy Scam Block cause value is Falsyyyyyyy")
}