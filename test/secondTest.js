const {Builder, By, Key} = require ("selenium-webdriver");
const ltCapabilties = require("../capabilities");
var should = require("chai").should();

const ITEMS = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item4",
    "Item 5",
    "Item 6"
];

describe('add another todo tests', function(){
    var driver;

    this.beforeEach(function(){
        driver = new Builder().forBrowser("firefox").build();
    });

    this.afterEach(async function(){
        await driver.quit();
    });

    it("check items in list", async function(){
        await driver.get("https://sortablejs.github.io/Sortable/");
    
        let elements = await driver.findElement(By.id("example1")).findElements(By.className("list-group-item")).then(function(elements){
            elements.forEach(element => {
                element.getText().then(function(text){
                    console.log(text);
                });
            });
        });
    });

})

