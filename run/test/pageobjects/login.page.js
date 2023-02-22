

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get mailText() {
        return $("//a[@class='blinkingText']");
    }

    get GetText(){
        return $("//header[@class='jumbotron text-center header_style']/a[2]");
    }

    async getTextForHeader(){
           console.log( await this.GetText.getText())
    }

    async mailTextSlice() {
        console.log("***********************************");
        var text = await this.mailText.getText();
        console.log(text)

        var scam = await text.slice(0, 8)
        console.log(scam)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
