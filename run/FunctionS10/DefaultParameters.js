
const flight = function (fName, pName, price) {
    pName = pName || 'Pankaj';
    price = price || '$100' + pName;
    const booking = {
        fName, pName, price,
    };
    console.log(booking)
}
flight('IXU20', 'Chinu')


const loop = function () {
    console.log("High Five ");
};
['pankaj', 'vm', 'v'].forEach(loop);