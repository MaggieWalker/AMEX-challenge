const router = require('express').Router()
const Students = require('../db/students')
const Campuses = require('../db/campuses')

router.get('/', async (req, res, next) => {
    try {
       const students = await Students.findAll();
       res.json(students);
    } catch (err) {
        res.send(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const student = await Students.findAll({
            include: [{
                model: Campuses,
                where: {id: req.params.id}
            }]
        });
        if (!student) res.sendStatus(404);
        else res.json(student)
    } catch (err) {
        next(err);
    }
})

module.exports = router
