import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const LowerWorkouts = () => { 
    const [lower, setLower] = useState({})
    const [newLower, setNewLower] = useState({
        title: '',
        description: '',
        time_frame: '',
        url: ''
    })
    const [click, setClick] = useState(0)


    const getLower = async () => {
        const res = await axios.get('http://localhost:3001/lowerbodyworkouts')
        setLower(res.data.lowerWorkouts)
        console.log(res.data.lowerWorkouts)
    }

    useEffect(() => {
        getLower()
    }, [click])


const handleChange = (event) => {
    const {input, value} = event.target
    setNewLower((lowerWorkouts) => {
        return {...lowerWorkouts, [input]: value}
    })
 } 

const handleAdd = async (event) => {
    event.preventDefault()
    const lowerWorkoutList = {
        title: newLower.title,
        description: newLower.description,
        time_frame: newLower.time_frame,
        url: newLower.url 
    }
    await axios.post('http://localhost:3001/lowerbodyworkouts', lowerWorkoutList)
        setClick((prevState) => prevState + 1)
        setNewLower({
            title: '',
            description: '',
            time_frame: '',
            url: '' 
})}

const handleDelete = async (event) => {
    let lowerId = lower._id
    event.preventDefault()
    await axios.delete(`http://localhost:3001/lowerbodyworkouts/${lowerId}`)
    setClick((prevState) => prevState + 1)
}

if (lower[0]) {
        return (
        <div>
            <div className = 'workout-list'>
                {lower.map((lowerWorkouts) => (
                    <div>
                        <h2 id ='workout-title'>{lowerWorkouts.title}</h2>
                        <h3>Time frame: {lowerWorkouts.time_frame}</h3>
                        <h4 id ='workout-description'>Workout description: {lowerWorkouts.description}</h4>
                        <h4>{lowerWorkouts.url}</h4>
                        <button onClick={handleDelete}> Delete Workout</button>
                    </div>
                ))}
            </div>

            <div className="new-workout-form">
            <h3 className='new-workout-title'>Add your own workout here!</h3>
                <form>
                    <div>
                        <input type='text' onChange={handleChange} name="title" value={newLower.title} placeholder="Workout title"></input>

                        <input type='text' onChange={handleChange} name="timeframe" value={newLower.time_frame} placeholder="Workout time frame"></input>

                        <textarea type='text' onChange={handleChange} name="description" value={newLower.description} placeholder="Workout description..." ></textarea>

                        <input type='text' onChange={handleChange} name="url" value={newLower.url} placeholder="Workout url"></input>

                    </div>
                <button onClick={handleAdd}>Add Workout</button>
                </form>
            </div>
        </div>  
    )
}
}

export default LowerWorkouts