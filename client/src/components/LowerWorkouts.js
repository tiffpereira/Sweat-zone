import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const LowerWorkouts = () => { 
    const [lower, setLower] = useState({})

    const getLower = async () => {
        const res = await axios.get('http://localhost:3001/lowerbodyworkouts')
        setLower(res.data.lowerWorkouts)
        console.log(res.data.lowerWorkouts)
    }

    useEffect(() => {
        getLower()
    }, [])

    if (lower[0]) {
        return (
            <div className = 'workout-list'>
                {lower.map((lowerWorkouts) => (
                    <div>
                        <h2 id ='workout-title'>{lowerWorkouts.title}</h2>
                        <h3>Time frame: {lowerWorkouts.time_frame}</h3>
                        <h4 id ='workout-description'>Workout description: {lowerWorkouts.description}</h4>
                        <h4>{lowerWorkouts.url}</h4>
                    </div>
                ))}
            </div>
    )
}       else {
    return <h1>Page loading...</h1>
}
}

export default LowerWorkouts