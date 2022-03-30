import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const LowerWorkouts = () => {
    const [lower, setLower] = useState({})

    const getLower = async () => {
        const lowerList = await axios.get('http://localhost:3005/lowerbodyworkouts')
        setLower(lowerList.data.lowerworkouts)
        console.log(lower)
    }

    useEffect(() => {
        getLower()
    }, [])



    return (
        <h3> Lower bod workouts </h3>
    )
}

export default LowerWorkouts