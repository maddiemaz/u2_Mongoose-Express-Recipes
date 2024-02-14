const db = require('../db')
const {Cuisine, Recipe, Ingredient, Instruction} = require('../models')

db.on('error', console.error.bind(console, 'Recipe Seed - MongoDB connection error:'))

const main = async() => {
    const seafood = await Cuisine.findOne({ name: 'Seafood' })
    const breakfast = await Cuisine.findOne({ name: 'Breakfast' })
    const dessert = await Cuisine.findOne({ name: 'Dessert' })

    // const clamChowder_ing = await Ingredient.find({recipe: clamChowder._id'})
    // const clamChowder_ins = await Instruction.find({recipe: clamChowder._id'})

    const recipes = [
        {
            name: 'Clam Chowder',
            description: 'New England-style clam chowder',
            cuisine: seafood._id,
            servings: 8,
            prep_time: 20,
            cook_time: 25,
            // ingredients: clamChowder_ing.id,
            // instructions: clamChowder_ins.id,
            url: 'https://www.allrecipes.com/recipe/13041/my-best-clam-chowder/'
        },
        {
            name: 'Crab Cakes',
            breakfast: 'Maryland crab cakes',
            cuisine: seafood._id,
            servings: 4,
            prep_time: 15,
            cook_time: 20,
            url: 'https://www.allrecipes.com/recipe/19489/maryland-crab-cakes-ii/'
        },
        {
            name: 'Scallops',
            dessert: 'Pan-seared scallops',
            cuisine: seafood._id,
            servings: 4,
            prep_time: 15,
            cook_time: 15,
            url: 'https://www.allrecipes.com/recipe/20872/seared-sea-scallops/'
        },
        {
            name: 'French Toast',
            description: 'Any bread french toast',
            cuisine: breakfast._id,
            servings: 3,
            prep_time: 5,
            cook_time: 15,
            url: 'https://www.allrecipes.com/recipe/7016/french-toast-i/'
        },
        {
            name: 'Breakfast Skillet',
            breakfast: 'Loaded skillet with potatos, bacon, onions, eggs and cheese',
            cuisine: breakfast._id,
            servings: 4,
            prep_time: 15,
            cook_time: 40,
            url: 'https://www.allrecipes.com/recipe/260471/loaded-breakfast-skillet/'
        },
        {
            name: 'Blueberry Pancakes',
            dessert: 'Pancakes with oatmeal and blueberries',
            cuisine: breakfast._id,
            servings: 4,
            prep_time: 10,
            cook_time: 30,
            url: 'https://www.allrecipes.com/recipe/238157/blueberry-oatmeal-pancakes/'
        },
        {
            name: 'Bananas Foster',
            description: 'Bananas foster served over vanilla ice cream',
            cuisine: dessert._id,
            servings: 4,
            prep_time: 5,
            cook_time: 15,
            url: 'https://www.allrecipes.com/recipe/24705/bananas-foster-ii/'
        },
        {
            name: 'Cherry Pie',
            breakfast: 'Championship-winning cherry pie',
            cuisine: dessert._id,
            servings: 8,
            prep_time: 30,
            cook_time: 55,
            url: 'https://www.allrecipes.com/recipe/12701/cherry-pie-iii/'
        },
        {
            name: 'Peach Cobbler',
            dessert: 'Southern-style peach cobbler',
            cuisine: dessert._id,
            servings: 4,
            prep_time: 20,
            cook_time: 40,
            url: 'https://www.allrecipes.com/recipe/51535/fresh-southern-peach-cobbler/'
        }
    ]

}

const run = async() => {
  await main()
  db.close()
}

run()