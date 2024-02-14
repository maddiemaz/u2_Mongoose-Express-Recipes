const Ingredient = require('../models/ingredient')

const getAllIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find()
        res.json(ingredients)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getIngredientsById = async(req,res) => {
    try {
        const{id} = req.params
        const ingredient = await Ingredient.findById(id)
        // If there are matching ingredients, send back the ingredients
        if (Ingredient) {
            return res.json(ingredient)
        }
        return res.status(404).send('Ingredients with the specified ID does not exist')
    } catch (error) {
        // If there's another (ex. internal) error
        return res.status(500).send(error.message)
    }
}

const createIngredients = async(req, res) => {
    try {
        const ingredient = await new Ingredient (req.body)
        await ingredient.save()
        return res.status(201).json({ingredient})
    }
    catch (e){
        return res.status(500).json({error: error.message})
    }
}

const updateIngredients = async(req, res) => {
    try {
        let {id} = req.params
        let ingredient = await Ingredient.findByIdAndUpdate(id, req.body, {new: true})
        if (ingredient) {
            return res.status(200).json(ingredient)
        }
        throw new Error ("Ingredient not found")
    }
    catch (e) {
        return res.status(500).send(error.message)
    }
}

const deleteIngredients = async(req, res) => {
    try {
        const{id} = req.params
        const deleted = await Ingredient.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send("Ingredient deleted")
        }
        throw new Error("Ingredient not found")
    } catch (e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllIngredients,
    getIngredientsById,
    createIngredients,
    updateIngredients,
    deleteIngredients
}