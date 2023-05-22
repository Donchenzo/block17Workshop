// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.



const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
]

// module.exports = coffeeMenu


for (let i=0; i<coffeeMenu.length; i++){
        let items = coffeeMenu[i]
    console.table (items.name)
    console.log(items.price <= 5? `${items.price}`: "")
    
}
for (let i=0; i<coffeeMenu.length; i++){
    let items = coffeeMenu[i]
console.log(items.price % 2 === 0 ? `${items.price}`: "")
}
let gTotal = 0
for (let i=0; i<coffeeMenu.length; i++){
    let items = coffeeMenu[i]
    let pricing = items.price
    gTotal = pricing + gTotal
    console.log(gTotal)
}
for (let i=0; i<coffeeMenu.length; i++){
    let items = coffeeMenu[i]
console.log(items.seasonal === true? [`${items.name} with imported beans`]: "")
}