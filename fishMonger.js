//  exported function must be named mongerInventory.

// Each day, the fishmonger buys exactly 10 of each inexpensive (see below) fish caught by the fishing boat. If any of the fishing boat's fish quantity is less than 10, the fish monger does not buy it.
// The fishmonger does not buy any fish from the boat that is priced higher than $7.50 per fish.
// The fishmonger lets the chef of a restuarant specify what their maximum budget is per fish. For example, a chef can tell the monger that she can only spend $5.00 per fish. The function should then return only fish that cost $5.00 or less.
// Each fish object provided by the fish monger should have a quantity of 10 instead of the original quantity from the fishing boat.
const {boatInventory} = require("./fishingBoat.js")


const inventory = boatInventory()

const boatInventoryNew = []

for (const fish of inventory) {
    if (fish.amount >+ 10 && fish.price <= 7.50){
        boatInventoryNew.push(fish)
    }
}

const menu = []

const mongerInventory = () => {
    for ( const selection of boatInventoryNew) {
        if (selection.price <= 5 && selection.amount >= 10) {
            selection.amount = 10
            menu.push(selection)
        }
        } return menu
    } 


//const { functionVariable } = require("./fishingBoat.js")


// write some comments describing the operations, data structures, function, and parameters needed to fulfill the above requirements.

module.exports = (mongerInventory)