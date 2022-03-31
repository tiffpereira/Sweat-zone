import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const LowerbodWorkouts = () => { 
    const [lower, setLower] = useState({})

    const getLower = async () => {
        const res = await axios.get('http://localhost:3005/lowerbodyworkouts')
        setLower(res.data.lowerworkouts)
    }

    useEffect(() => {
        getLower()
    }, [])

    if (lower[0]) {
        return (
            <div>
                {lower.map((lowerworkouts) => (
                    <div>
                        <h2>{lowerworkouts.title}</h2>
                        <h3>Time frame: {lowerworkouts.time_frame}</h3>
                        <h4>Workout description:{lowerworkouts.description}</h4>
                        <h4>{lowerworkouts.url}</h4>
                    </div>
                ))}
            </div>
    )
}       else {
    return <h1>Page loading...</h1>
}
}

export default LowerbodWorkouts