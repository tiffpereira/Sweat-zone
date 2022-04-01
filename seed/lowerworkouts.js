const db = require('../db')
const Lower = require('../models/lowerworkout')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const lowerworkouts = [
        {
            title: "Glute Focused Workout",
            description: `BEGINNER LEVEL
            Trainer:Krissy Cela
            THE WORKOUT:
            Hip Thrusts
            Sumo Deadlifts 
            Stiff Legged Deadlifts 
            Split Squats 
            Glute Bridges 
            Walking Lunges 
            Abductions`,
            time_frame:"60 Minutes",
            url: "https://www.youtube.com/watch?v=WFEtAjDIuKA"
        },

        {
            title: "Quad, Glute, & Hamstring Focused Workout",
            description: `BEGINNER LEVEL
            Trainer: Jeremy Ethier 
            THE WORKOUT:
            Back Squats or Front Squats
            Hip Thrusts
            Split Squats
            Glute Ham Raise 
            Standing Single leg Calf Raise
            Seated Calf Raise`,
	        time_frame:"40 Minutes",
	        url: "https://www.youtube.com/watch?v=Xg9B6pqHUQE"
        },

        {
            title: "Full Leg Workout",
            description: `INTERMEDIATE LEVEL
            Trainer: Obi Vincent
            THE WORKOUT:
            Kang Squats
            Cossack Squats
            Calf Raises
            Anderson Squat
            Banded KB Swing 
            Heel Elevated Goblet Squat
            Smith Machine Split Squats
            Leg Extensions`,
            time_frame:"50 Minutes",
            url: "https://www.youtube.com/watch?v=TC8ui7WkOao"
        },

        { 
            title: `Quad & Glute Focused Workout`,
            description: `INTERMEDIATE LEVEL
            Trainer: Whitney Simmons 
            THE WORKOUT:
            Barbell Back Squat
            Single-leg Assisted Barbell RDL
            Rear Foot Elevated Split Squats
            B-Stance Hip Thrusts
            Leg Extensions`,
	        time_frame: "40 Minutes",
            url: "https://www.youtube.com/watch?v=Wtj6ZCbtOsY"
        },

        {
            title: "Quad and Calf Focused Workout",
            description: `EXPERIENCED LEVEL
            Trainer: Caroline Girvan
            THE WORKOUT:
            Heel Elevated Squats
            Static Lunge
            Calf Raises
            Wall Sit with Calf Raise
            Staggered Squat to Squat
            Paused ELevated Squat
            Bulgarian Lunge`,
            time_frame:"45 Minutes",
            url: "https://www.youtube.com/watch?v=pNqJ3ZAU178"
        }

    ]
    await Lower.insertMany(lowerworkouts)
    console.log('created lower body workouts!')
}

const run = async () => {
    await main()
    db.close()
}

run()