const express = require('express')
const db = require('./db')
// const cors = require('cors')
const PORT = process.env.PORT || 3001
const logger = require('morgan')
const bodyParser = require('body-parser')

// const {Cuisine, Recipe, Ingredient, Instruction} = require('./models')

const cuisineController = require('./controllers/cuisineController')
const recipeController = require('./controllers/recipeController')
const ingredientController = require('./controllers/ingredientController')
const instructionController = require('./controllers/instructionController')

const app = express()

// app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))

//////// Routes ////////
app.get('/', (req, res) => {res.send('Welcome')})

// Cuisine Routes
app.get('/cuisine', cuisineController.getAllCuisines)
app.get('/cuisine/:id', cuisineController.getCuisineById)
app.post('/cuisine/', cuisineController.createCuisine)
app.put('/cuisine/:id', cuisineController.updateCuisine)
app.delete('/cuisine/:id', cuisineController.deleteCuisine)
// Recipe Routes
app.get('/recipes', recipeController.getAllRecipes)
app.get('/recipes/:id', recipeController.getRecipeById)
app.post('/recipes/', recipeController.createRecipe)
app.put('/recipes/:id', recipeController.updateRecipe)
app.delete('/recipes/:id', recipeController.deleteRecipe)

// Ingredients Routes
app.get('/ingredients', ingredientController.getAllIngredients)
app.get('/ingredients/:id', ingredientController.getIngredientsById)
app.post('/ingredients/', ingredientController.createIngredients)
app.put('/ingredients/:id', ingredientController.updateIngredients)
app.delete('/ingredients/:id', ingredientController.deleteIngredients)
// Instructions Routes
app.get('/instructions', instructionController.getAllInstructions)
app.get('/instructions/:id', instructionController.getInstructionsById)
app.post('/instructions/', instructionController.createInstructions)
app.put('/instructions/:id', instructionController.updateInstructions)
app.delete('/instructions/:id', instructionController.deleteInstructions)