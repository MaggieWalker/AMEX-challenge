const router = require('express').Router()
const Students = require('../db/students')
const Campuses = require('../db/campuses')

router.get('/', async (req, res, next) => {
    try {
       const students = await Students.findAll({
        include: [{model: Campuses}]
    });
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

router.post('/', async (req, res, next) => {
    try {
        const newStudents = await Students.create(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                GPA: 4.0
            }
        )
        res.status(201).json(newStudents)
    } catch (err) {
        next(err)
    }
})


module.exports = router
