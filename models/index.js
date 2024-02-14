const mongoose = require('mongoose')
const cuisineSchema = require('./cuisine')
const recipeSchema = require('./recipe')
const ingredientSchema = require('./ingredient')
const instructionSchema = require('./instruction')

const Cuisine = mongoose.model('Cuisine', cuisineSchema)
const Recipe = mongoose.model('Recipe', recipeSchema)
const Ingredient = mongoose.model('Ingredient', ingredientSchema)
const Instruction = mongoose.model('Instruction', instructionSchema)

module.exports = {
    Cuisine,
    Recipe,
    Ingredient,
    Instruction
}