/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    rahulURL(){
        return browser.url("https://rahulshettyacademy.com/AutomationPractice/");        
    }
   async myTitle() {
        var myTitle =await browser.getTitle();
        console.log("****Title Here**** " + myTitle)
    } 
}
