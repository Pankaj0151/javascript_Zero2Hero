
var a = "tea"
const b = "kaffi"
let c = "chaklet"

function add(a, b) {
    return a + b;
}
console.log(add(a, c))

const add_Expression = function (a, b) {
    return a + b;
}
console.log(add_Expression(a, b))


let add_arrow = () => a + c;
console.log(add_arrow())
