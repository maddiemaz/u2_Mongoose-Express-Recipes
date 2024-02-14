const{Schema} = require('mongoose')

const cuisineSchema = new Schema(
    {
        type: {type: String, required: true},
        description: {type: String, required: true},
    },
    {timestamps: true}
)

module.exports = cuisineSchema