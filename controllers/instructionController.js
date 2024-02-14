const Instruction = require('../models/instruction')

const getAllInstructions = async (req, res) => {
    try {
        const instructions = await Instruction.find()
        res.json(instructions)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getInstructionsById = async(req,res) => {
    try {
        const{id} = req.params
        const instruction = await Instruction.findById(id)
        // If there are matching instructions, send back the instructions
        if (Instruction) {
            return res.json(instruction)
        }
        return res.status(404).send('Instructions with the specified ID does not exist')
    } catch (error) {
        // If there's another (ex. internal) error
        return res.status(500).send(error.message)
    }
}

const createInstructions = async(req, res) => {
    try {
        const instruction = await new Instruction (req.body)
        await instruction.save()
        return res.status(201).json({instruction})
    }
    catch (e){
        return res.status(500).json({error: error.message})
    }
}

const updateInstructions = async(req, res) => {
    try {
        let {id} = req.params
        let instruction = await Instruction.findByIdAndUpdate(id, req.body, {new: true})
        if (instruction) {
            return res.status(200).json(instruction)
        }
        throw new Error ("Instructions not found")
    }
    catch (e) {
        return res.status(500).send(error.message)
    }
}

const deleteInstructions = async(req, res) => {
    try {
        const{id} = req.params
        const deleted = await Instruction.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send("Instructions deleted")
        }
        throw new Error("Instructions not found")
    } catch (e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllInstructions,
    getInstructionsById,
    createInstructions,
    updateInstructions,
    deleteInstructions
}