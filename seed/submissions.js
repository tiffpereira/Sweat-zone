const db = require('../db')
const Submission = require('../models/submission')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const submissions = 
    [
        {title: '',
        full_name: '',
        description: '',
        time_frame: '',
        url: ''
        },

        {timestamps: true}

    ]
    await Submission.insertMany(submissions)
    console.log('Your submission has been received!')
}

const run = async () => {
await main()
db.close()
}

run()