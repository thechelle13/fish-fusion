//import the function that is exported from foshmonger.

//import and invoke the function that is exported by the fish monger 

//define a function that build an HTML version of their daily menu named fishMenu
const { mongerInventory } = require("./fishMonger.js")


const inventory = mongerInventory()
// console.log(inventory)

const boughtInventory = []
const finalMenu = ""

const fishMenu = () => {
    for (const fish of inventory) {
     fish.amount = fish.amount * .50 
    boughtInventory.push(fish)
    }

    for (const fishType of boughtInventory) {
    
        console.log(`<h1>Menu</h1><article class="menu"><h2> ${fishType.species} </h2><section class="menu_item"> ${fishType.species} Soup </section><section class="menu_item"> ${fishType.species} Sandwich </section><section class="menu_item">Grilled ${fishType.species}</section></article>`)
    

    }


module.exports = {fishMenu}



// Each day, the chef visits the monger and specifies the maximum price she is able to spedn per fish.
// If the monger has any fish at that price point or less, the chef buys 50% of the existing inventory.
// The chef then creates 3 different meals per fish - a soup, a grilled dinner, and sandwich. For example, if tuna was bought, the following meals will be on the menu.
// Tuna Soup
// Tuna Sandwich
// Grilled Tuna
// Your HTML structure must match the example below. Use the same elements and the same class names.
// <h1>Menu</h1>
// <article class="menu">
//     <h2>Tuna</h2>
//     <section class="menu__item">Tuna Soup</section>
//     <section class="menu__item">Tuna Sandwich</section>
//     <section class="menu__item">Grilled Tuna</section>
// </article>