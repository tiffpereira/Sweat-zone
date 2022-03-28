const db = require('../db')
const Upper = require('../models/upperworkout')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const upperworkouts = [
        {title: "",
        description:"" , 
        time_frame: "",
        url: ""}
    ]
    await Upper.insertMany(upperworkouts)
    console.log('created upper body workouts!')
}

const run = async () => {
    await main()
    db.close()
}

run()