const db = require('../db')
const {Ingredient, Recipe} = require('../models')

db.on('error', console.error.bind(console, 'Ingredient Seed - MongoDB connection error:'))

const main = async() => {
  const clamChowder = await Recipe.findOne({ name: 'Clam Chowder' })
  const crabCakes = await Recipe.findOne({ name: 'Crab Cakes' })
  const scallops = await Recipe.findOne({ name: 'Scallops' })
  const frenchToast = await Recipe.findOne({ name: 'French Toast' })
  const breakfastSkillet = await Recipe.findOne({ name: 'Breakfast Skillet' })
  const blueberryPancakes = await Recipe.findOne({ name: 'Blueberry Pancakes' })
  const bananasFoster = await Recipe.findOne({ name: 'Bananas Foster' })
  const cherryPie = await Recipe.findOne({ name: 'Cherry Pie' })
  const peachCobbler = await Recipe.findOne({ name: 'Peach Cobbler' })

  const ingredients = [
    {
      recipe: clamChowder._id,
      ingredient_list: [
        '2 cups cubed potatoes',
        '1 cup diced carrots',
        '1 cup diced celery',
        '1 cup minced onion',
        '3 6.5oz cans minced clams, drained',
        '3/4 cup butter',
        '3/4 cup all-purpose flour',
        '1 quart half-and-half cream',
        '2 tablespoons red wine vinegar',
        '1 1/2 teaspoons salt'
      ]
    },
    {
      recipe: crabCakes._id,
      ingredient_list: [
        'cooking spray',
        '1 pound crabmeat, shredded',
        '1 1/2 tablespoons dry breadcrumbs',
        '2 teaspoons chopped parsley',
        'salt and pepper to taste',
        '1 egg',
        '1 1/2 tablespoons mayonnaise',
        '1/2 teaspoon ground dry mustard',
        '1 dash hot pepper sauce'
        ]
      },
      {
        recipe: scallops._id,
        ingredient_list: [
          '1/2 cup all-purpose flour',
          '2 teaspoons seasoning salt',
          '1/2 teaspoon oregano',
          '1/2 teaspoon thyme',
          '2 tablespoons lemon pepper',
          '16 sea scallops, rinsed and drained',
          '2 tablespoons olive oil',
          '4 tablespoons chopped fresh parsley',
          '4 teaspoons lemon juice'
        ]
      },


      {
        recipe: frenchToast._id,
        ingredient_list: [
          '3/4 cup milk',
          '2 large eggs',
          '1 teaspoon vanilla extract',
          '1/4 teaspoon ground cinnamon',
          'salt to taste',
          '6 thick slices bread',
          '1 tablespoon unsalted butter, or more as needed'
        ]
      },
      {
        recipe: breakfastSkillet._id,
        ingredient_list: [
          '4 slices bacon, cut into 1 inch pieces',
          '1 onion, chopped',
          '3 russet potatoes, chopped into 3/4 inch cubes',
          '1/4 cup water',
          '2 green onions, sliced',
          '2 cloves garlic',
          'kosher salt and ground pepper to taste',
          '4 large eggs',
          '1 cup shredded cheddar cheese'
        ]
      },
      {
        recipe: blueberryPancakes._id,
        ingredient_list: [
          '2 cups rolled oats',
          '1 teaspoon ground cinnamon',
          '1/2 teaspoon baking powder',
          '1/2 teaspoon salt',
          '2 eggs',
          '1/3 cup honey',
          '1/4 cup almond milk',
          '1 teaspoon vanilla extract',
          '1 cup blueberries'
        ]
      },


      {
        recipe: bananasFoster._id,
        ingredient_list: [
          '1/4 cup butter',
          '2/3 cup dark brown sugar',
          '3 1/2 tablespoons rum',
          '1 1/2 teaspoons vanilla extract',
          '1/2 teaspoon ground cinnamon',
          '3 bananas, peeled and sliced (lengthwise and crosswise)',
          '1/4 cup coarsely-chopped walnuts',
          '1 pint vanilla ice cream'
        ]
      },
      {
        recipe: cherryPie._id,
        ingredient_list: [
          '2 cups all-purpose flour',
          '1 pinch salt',
          '1 cup shortening, chilled',
          '1/2 cup cold water',
          '2 cups pitted sour cherries',
          '1 1/4 cups white sugar',
          '10 teaspoons cornstarch',
          '1 tablespoon butter',
          '1/4 teaspoon almond extract'
        ]
      },
      {
        recipe: peachCobbler._id,
        ingredient_list: [
          '8 fresh peaches; peeled, pitted, and sliced into thin wedges',
          '1/4 cup white sugar',
          '1/4 cup brown sugar',
          '1/4 teaspoon ground cinnamon',
          '1/8 teaspoon ground nutmeg',
          '2 teaspoons cornstarch',
          '1 cup all-purpose flour',
          '1/4 cup white sugar',
          '1/4 cup brown sugar',
          '1 teaspoon salt',
          '6 tablespoons unsalted butter, chilled and cut into small pieces',
          '1/4 cup boiling water',
          '3 tablespoons white sugar',
          '1 teaspoon ground cinnamon'
        ]
      },
        
    ]
    await Ingredient.insertMany(ingredients)
    console.log('created ingredients')
}

const run = async() => {
  await main()
  db.close()
}

run()