import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const UpperWorkouts = () => { 
    const [upper, setUpper] = useState({})
    const [newUpper, setNewUpper] = useState({
        title: '',
        description: '',
        time_frame: '',
        url: ''
    })
    const [click, setClick] = useState(0)

    const getUpper = async () => {
        const res = await axios.get('http://localhost:3001/upperbodyworkouts')
        setUpper(res.data.upperWorkouts)
        console.log(res.data.upperWorkouts)
    }

    useEffect(() => {
        getUpper()
    }, [click])


    const handleChange = (event) => {
        const {input, value} = event.target
        setNewUpper((Upper) => {
            return {...Upper, [input]: value}
        })
     } 
    
    const handleAdd = async (event) => {
        event.preventDefault()
        const upperWorkoutList = {
            title: newUpper.title,
            description: newUpper.description,
            time_frame: newUpper.time_frame,
            url: newUpper.url 
        }
        await axios.post('http://localhost:3001/upperbodyworkouts', upperWorkoutList)
            setClick((prevState) => prevState + 1)
            setNewUpper({
                title: '',
                description: '',
                time_frame: '',
                url: '' 
    })}
    
    const handleDelete = async (event) => {
        let upperId = upper._id
        event.preventDefault()
        await axios.delete(`http://localhost:3001/upperbodyworkouts/${upperId}`)
        setClick((prevState) => prevState + 1)
    }


    if (upper[0]) {
        return (
            <div>
            <div className = 'workout-list'>
                {upper.map((upperWorkouts) => (
                    <div>
                        <h2 id="workout-title">{upperWorkouts.title}</h2>
                        <h3>Time frame: {upperWorkouts.time_frame}</h3>
                        <h4 id ='workout-description'>Workout description: {upperWorkouts.description}</h4>
                        <h4>{upperWorkouts.url}</h4>
                        <button onClick={handleDelete}> Delete Workout</button>
                    </div>
                ))}
            </div>
    
            <div className="new-workout-form">
                <h3 className='new-workout-title'>Add your own workout here!</h3>
                    <form>
                        <div>
                            <input type='text' onChange={handleChange} name="title" value={newUpper.title} placeholder="Workout title"></input>

                            <input type='text' onChange={handleChange} name="timeframe" value={newUpper.time_frame} placeholder="Workout time frame"></input>

                            <textarea type='text' onChange={handleChange} name="description" value={newUpper.description} placeholder="Workout description..." ></textarea>

                            <input type='text' onChange={handleChange} name="url" value={newUpper.url} placeholder="Workout url"></input>

                        </div>
                            <button onClick={handleAdd}>Add Workout</button>
                    </form>
            </div>
            </div>  
)}
}


export default UpperWorkouts