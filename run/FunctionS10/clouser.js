
let f;

const g = function () {
    const a = 23;
    console.log(a * 2)

    f = function () {
        console.log(`Internal Matter  ${a *3}`)
    }
}
g();
f();

const H = function () {
    const a = 13;
    console.log(a * 2)

    f = function () {
        console.log(`Internal Matter  ${a *3}`)
    }
    
    console.log(`sadasdasdasdasdas`)

}
H();
f();

const boarding  = function(n,wait){

    setTimeout(function() {
        console.log(`setTimeout function Console`)

    }, wait * 1);

    console.log(`boarding function Console`)
}

boarding(3,100)