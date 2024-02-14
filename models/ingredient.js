const{Schema} = require('mongoose')

const ingredientSchema = new Schema(
    {
        recipe: {type: Schema.Types.ObjectId, ref: 'Recipe'},
        ingredient_list: {type: String, required: true}
    }
)

module.exports = ingredientSchema