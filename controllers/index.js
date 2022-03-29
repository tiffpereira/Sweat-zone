const Lower = require('../models/lowerworkout')
const Upper = require('../models/upperworkout')

// const Submit = require('../models/submission')

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
        const { id }  = req.params;
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

const updateLowerWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        await Lower.findByIdAndUpdate(id, req.body, { new: true }, (err, lower) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!plant) {
                res.status(500).send('Lower body workout not found!');
            }
            return res.status(200).json(lower);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteLowerWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Lower.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Lower body workout deleted");
        }
        throw new Error("Lower body workout not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

/////////////////////// Upper body controllers //////////////////////////
const getUpperWorkouts = async (req, res) => {
    try {
        const upperWorkouts = await Upper.find()
        return res.status(200).json({ upperWorkouts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUpperById = async (req,res) => {
    try {
        const { id }  = req.params;
        const upper = await Upper.findById(id)
        if (upper) {
            return res.status(200).json({ upper });
        }
        return res.status(404).send('Upper body workout with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createUpperWorkout = async (req, res) => {
    try {
        const upperWorkout = await new Submit(req.body)
        await upperWorkout.save()
        return res.status(201).json({ workout, });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateUpperWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        await Upper.findByIdAndUpdate(id, req.body, { new: true }, (err, upper) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!plant) {
                res.status(500).send('Upper body workout not found!');
            }
            return res.status(200).json(upper);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteUpperWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Upper.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Upper body workout deleted");
        }
        throw new Error("Upper body workout not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getLowerWorkouts,
    updateLowerWorkout,
    deleteLowerWorkout,
    getLowerById,
    createLowerWorkout,

    getUpperWorkouts,
    updateUpperWorkout,
    deleteUpperWorkout,
    getUpperById,
    createUpperWorkout
}