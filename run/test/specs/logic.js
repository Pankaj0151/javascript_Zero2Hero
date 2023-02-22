const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should', async () => {
        await LoginPage.rahulURL()

        const listOfPrice = await $$("//table[@class='table-display']/tbody/tr/td[3]")

        const sum = (await Promise.all(await listOfPrice.map(async(activatePrice)=> parseInt((await activatePrice.getText()))))).reduce((acc, price)=> acc+price,0)
        console.log(sum);


      //  let sum =0;
      //  listOfPrice.forEach(async(element) => {
      //   var sum =  await element.getText();
      //   console.log(sum); });
 
       //  for (let index = 0; index < listOfPrice.length; index++) {
        //     const abc = await listOfPrice[index].getText()
        //    console.log(abc);
            // console.log(await abc.getText()) }
 
        // await LoginPage.myTitle()
        // await LoginPage.getTextForHeader()
        // await LoginPage.mailTextSlice();
    });
});
