var tempValue = [6, 1, 2, 3, 4, 5];

const calTempValue = function (temps) {

    let max = temps[0];
    for (let i = 0; i < temps.length; i++) {
        if (temps[i] > max) {
            max = temps[i];
        }
    }
    console.log(max);
};
calTempValue(tempValue);


var tempValue2 = [6, 1, 2, 3, 4, 5];

var tempValue3 = tempValue.concat(tempValue2)
console.log(tempValue3)