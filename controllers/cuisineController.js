const Cuisine = require('../models/cuisine')

const getAllCuisines = async (req, res) => {
    try {
        const cuisines = await Cuisine.find()
        res.json(cuisines)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCuisineById = async(req,res) => {
    try {
        const{id} = req.params
        const cuisine = await Cuisine.findById(id)
        // If there is a matching cuisine, send back the cuisine
        if (Cuisine) {
            return res.json(cuisine)
        }
        return res.status(404).send('Cuisine with the specified ID does not exist')
    } catch (error) {
        // If there's another (ex. internal) error
        return res.status(500).send(error.message)
    }
}

const createCuisine = async(req, res) => {
    try {
        const cuisine = await new cuisine (req.body)
        await cuisine.save()
        return res.status(201).json({cuisine})
    }
    catch (e){
        return res.status(500).json({error: error.message})
    }
}

const updateCuisine = async(req, res) => {
    try {
        let {id} = req.params
        let cuisine = await Cuisine.findByIdAndUpdate(id, req.body, {new: true})
        if (cuisine) {
            return res.status(200).json(cuisine)
        }
        throw new Error ("Cuisine not found")
    }
    catch (e) {
        return res.status(500).send(error.message)
    }
}

const deleteCuisine = async(req, res) => {
    try {
        const{id} = req.params
        const deleted = await Cuisine.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send("Cuisine deleted")
        }
        throw new Error("Cuisine not found")
    } catch (e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllCuisines,
    getCuisineById,
    createCuisine,
    updateCuisine,
    deleteCuisine
}