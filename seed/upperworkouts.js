const db = require('../db')
const Upper = require('../models/upperworkout')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const upperworkouts = [
        {
            title: "Full Upper Body Workout",
            description:`BEGINNER LEVEL
            Trainer: Whitney Simmons 
            THE WORKOUT:
            Wide Grip Overhand Row
            Underhand Row
            Cable Lat Pull Down
            Rear Delt Pull
            Lateral Raise
            Upright Row
            Incline Close Grip Press
            Chest Fly 
            Bicep Curl
            Cable Crunches`, 
            time_frame: "65 Minutes",
            url: "https://www.youtube.com/watch?v=4lGFDAyWW7g"
        },

        {
            title: "Bicep and Tricep Focused Workout",
            description:`BEGINNER LEVEL
            Trainer: Obi Vincent
            THE WORKOUT:
            Cable Bicep Curl
            Cable Rope Over Head Extension
            EZ Bar Curls
            Supported DB Tricepts Extension 
            Negative Preacher Curls
            Triceps Plank Press
            Incline Zottoman Curls
            Incline DB Hammer Curls 
            Cable Triceps Kick Back` , 
            time_frame: "45 Minutes",
            url: "https://www.youtube.com/watch?v=3vw0w_j7O1A"
        },

        {
            title: "Back Focused Workout",
            description:`INTERMEDIATE LEVEL
            Trainer: Jeremy Ethier 
            THE WORKOUT:
            Deadlift 
            Pull-Ups
            Chest Supported Rows
            Lat Pull Down
            Scapula Pull Up` , 
            time_frame: "40 Minutes",
            url: "https://www.youtube.com/watch?v=8LJ3Q3Fsrzs"
        },

        {
            title: "Chest Focused Workout",
            description:`INTERMEDIATE LEVEL
            Trainer: Jeremy Ethier 
            THE WORKOUT:
            Incline Dumbbell Press
            Dips
            Banded Push-Ups
            High to Low Cable Crossovers` , 
            time_frame: "35 Minutes",
            url: "https://www.youtube.com/watch?v=MxnzcssW-tk"
        },

        {
            title: "Abs Focused Workout",
            description:`EXPERIENCED LEVEL
            Trainer: Annabelle Hayes
            THE WORKOUT:
            Single Leg Raise Crunch
            Single Leg Crunches
            Rope Crunches
            Knee to Chest Crunches
            High-Cable Woodchops
            Low-Cable Woodchops
            Cable Twists
            Cable Tow Touches
            Cable Side Bends
            Cable Mountain Climbers` , 
            time_frame: "35 Minutes",
            url: "https://www.youtube.com/watch?v=1XBQMd1Q9tc"
        }
    ]
    await Upper.insertMany(upperworkouts)
    console.log('created upper body workouts!')
}

const run = async () => {
    await main()
    db.close()
}

run()