let array1 = [1,2,3]


array1.forEach(arrayVariable1 => {
    console.log(`${arrayVariable1 +0} : ${arrayVariable1 +0}`)
});

console.log(`**************************`)

for (const arrayVariable of array1) {
    console.log(`${arrayVariable +0} : ${arrayVariable +0}`)
}

console.log(`**************************`)

array1.forEach(element => {
    console.log(element)
});

