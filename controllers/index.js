const Lower = require('../models/lowerworkout')
const Upper = require('../models/upperworkout')
const Submit = require('../models/submission')

const getLowerWorkouts = async (req, res) => {
    try {
        const lowerWorkouts = await Lower.find()
        return res.status(200).json({ lowerWorkouts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getLowerById = async (req,res) => {
    try {
        const { id } = req.params;
        const lower = await Lower.findById(id)
        if (lower) {
            return res.status(200).json({ lower });
        }
        return res.status(404).send('Lower body workout with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createLowerWorkout = async (req, res) => {
    try {
        const workout = await new Submit(req.body)
        await workout.save()
        return res.status(201).json({ workout, });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getUpperWorkouts = async (req, res) => {
    try {
        const upperWorkouts = await Upper.find()
        return res.status(200).json({ upperWorkouts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getLowerWorkouts,
    getUpperWorkouts,
    getLowerById,
    createLowerWorkout
}