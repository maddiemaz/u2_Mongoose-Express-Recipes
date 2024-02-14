const{Schema} = require('mongoose')

const instructionSchema = new Schema(
    {
        recipe: {type: Schema.Types.ObjectId, ref: 'Recipe'},
        // step: {type: Number, required: true},
        //  -> could make required: false so recipes w shorter lists wouldn't be invalid, they'd just return fewer
        instruction_list: {type: String, required: true}
    }
)

module.exports = instructionSchema