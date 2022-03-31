import React from 'react'

const upperWorkouts = (props) => {
    <div>
        <h1>workouts:</h1>
        <h2>{props.title}</h2>
        <h3>{props.time_frame}</h3>
        <p>{props.description}</p>
        <h3>{props.url}</h3>
    </div>

}


export default upperWorkouts