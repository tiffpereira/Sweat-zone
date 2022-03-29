const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('Landing Page'))

router.get('/lowerbodyworkouts', controllers.getLowerWorkouts)

router.get('/upperbodyworkouts', controllers.getUpperWorkouts)

router.get('lowerbodyworkouts/:id', controllers.getLowerById)


//Look into post method: I think the route is incorrect might have to make 2, one for lower and upper body

router.post('/newworkout', controllers.createWorkout)

module.exports = router;