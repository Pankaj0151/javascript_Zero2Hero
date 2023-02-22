
const scam = {
        NameCD: "chinu",
        NamePV: 'Pankaj',
        SurName: "Vadade",
        birthYear: 1995,
        array_scam: [1, 2, 2, 3, 3, 3],
        sundar : false,
        CalAge: function () {
        this.age = 2027 - this.birthYear;
                return  this.age;
        },
        getSummary: function () {
                return `${this.CalAge()} year cha ${this.NameCD}  
                ${this.sundar ? 'Yes chan Disnar' : 'Khup chan disnar' }        `
        }
};

console.log("SUmmarrryyryryryyryryyry " + scam.getSummary());



console.log(scam.Name)
console.log(scam.SurName)
console.log(scam['Name'])

// Add new Obj property
scam.location = "harsul";
scam['address'] = "Aurangabad";
console.log(scam['location'])
console.log(scam.address)
console.log(scam['address'])


console.log(`My name is ${scam.Name} and my array Index value is ${scam.array_scam.length - 1}`)

console.log(`My name is ${scam.Name} and my array Index value is ${scam.array_scam[2]}`)
