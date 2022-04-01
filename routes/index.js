const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('Landing Page'))

router.get('/lowerbodyworkouts', controllers.getLowerWorkouts)

router.get('/lowerbodyworkouts/:id', controllers.getLowerById)

router.put('/lowerbodyworkouts/:id', controllers.updateLowerWorkout)

router.delete('/lowerbodyworkouts/:id', controllers.deleteLowerWorkout)

router.post('/lowerbodyworkouts', controllers.createLowerWorkout)

/////////////////////////// Upper Body routes /////////////////////////////

router.get('/upperbodyworkouts', controllers.getUpperWorkouts)

router.get('/upperbodyworkouts/:id', controllers.getUpperById)

router.put('/upperbodyworkouts/:id', controllers.updateUpperWorkout)

router.delete('/upperbodyworkouts/:id', controllers.deleteUpperWorkout)

router.post('/upperbodyworkouts', controllers.createUpperWorkout)

//////////////////////////////// Submission /////////////////////////////////

router.post('/submission', controllers.createSubmission)

router.put('/submission', controllers.updateSubmission)

module.exports = router;