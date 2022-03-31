import React from 'react'
import { useNavigate } from 'react-router-dom'

const Workouts = (props) => {
    const navigate= useNavigate()

    return (
        <div>
            <div onClick={() => navigate('/lowerbodyworkouts')}>
                <h1>Lower Body Workouts</h1>
            </div>
            <div onClick={() => navigate('/upperbodyworkouts')}>
                <h1>Upper Body Workouts</h1>
            </div>

        </div>
    )
}

export default Workouts 