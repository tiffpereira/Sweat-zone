import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const UpperWorkouts = () => { 
    const [upper, setUpper] = useState({})

    const getUpper = async () => {
        const res = await axios.get('http://localhost:3001/upperbodyworkouts')
        setUpper(res.data.upperWorkouts)
        console.log(res.data.upperWorkouts)
    }

    useEffect(() => {
        getUpper()
    }, [])

    if (upper[0]) {
        return (
            <div className = 'workout-list'>
                {upper.map((upperWorkouts) => (
                    <div>
                        <h2 id="workout-title">{upperWorkouts.title}</h2>
                        <h3>Time frame: {upperWorkouts.time_frame}</h3>
                        <h4 id ='workout-description'>Workout description: {upperWorkouts.description}</h4>
                        <h4>{upperWorkouts.url}</h4>
                    </div>
                ))}
            </div>
    )
}       else {
    return <h1>Page loading...</h1>
}
}

export default UpperWorkouts