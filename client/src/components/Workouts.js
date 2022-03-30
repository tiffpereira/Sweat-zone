import React from 'react'
import { useNavigate } from 'react-router-dom'

const Workouts = () => {
    const navigate= useNavigate()

    return (
        <div>
            <div onClick={() => navigate('/lowerbodyworkouts')}>
                <h3>Lower Body Workouts</h3>
            </div>
            <div onClick={() => navigate('/upperbodyworkouts')}>
                <h3>Upper Body Workouts</h3>
            </div>

        </div>
    )
}

export default Workouts 