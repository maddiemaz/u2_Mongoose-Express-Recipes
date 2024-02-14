const{Schema} = require('mongoose')

const recipeSchema = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        cuisine: {type: Schema.Types.ObjectId, ref: 'Cuisine'},
        difficulty: {type: String, required: true},
        servings: {type: Number, required: true},
        prep_time: {type: Number, required: true},
        cook_time: {type: Number, required: true},
        // ingredients: {type: Schema.Types.ObjectId, ref: 'Ingredient'},
        // instructions: {type: Schema.Types.ObjectId, ref: 'Instruction'},
        url: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = recipeSchema