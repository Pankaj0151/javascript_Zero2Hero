const upperCase = function (name) {
    const names = name.split(' ');

    const arrayy = [];     
    for (const iterator of names) {
       
        //arrayy.push(iterator[0].toUpperCase() + iterator.slice(1));
        arrayy.push(iterator.replace(    iterator[0]   , iterator[0].toUpperCase()))
        }
    console.log(arrayy.join(' '));
}
upperCase(`pankaj chinu cidco`);
console.log('Chinu'.padStart(11,'Pankaj').padEnd(20,'+'));

const maskCreditCard = function (card){
    const str = card + '';    
    const last = str.slice(-4);
    console.log(str);
    console.log(last);
    return last.padStart(str.length, '*');
}
console.log(maskCreditCard(12345678))


const name = '';


