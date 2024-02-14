const db = require('../db')
const {Cuisine} = require('../models')

db.on('error', console.error.bind(console, 'Cuisine Seed - MongoDB connection error:'))

const main = async() => {
    const cuisines = [
        {
            type: 'Seafood',
            description: 'food w fish'
        },
        {
            type: 'Breakfast',
            description: 'breakfast food'
        },
        {
            type: 'Dessert',
            description: 'dessert food'
        },
    ]
    await Cuisine.insertMany(cuisines)
    console.log('Inserted cuisines')
}

const run = async() => {
  await main()
  db.close()
}

run()