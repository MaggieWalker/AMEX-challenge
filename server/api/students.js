const router = require('express').Router()
const Students = require('../db/students')

router.get('/', async (req, res, next) => {
    try {
       const students = await Students.findAll();
       res.json(students);
    } catch (err) {
        res.send(err)
    }
})

module.exports = router
