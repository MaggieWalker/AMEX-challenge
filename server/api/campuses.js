const router = require('express').Router();
const Campuses = require('../db/campuses')
const Students = require('../db/students')

router.get('/', async (req, res, next) => {
    try {
        const campuses = await Campuses.findAll({
            include: [{model: Students}]
        })
        res.json(campuses);
    } catch (err){
        res.send(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const campus = await Campuses.findAll({
            include: [{
                model: Students,
                where: {id: req.params.id}
            }]
        });
        if (!campus) res.sendStatus(404);
        else res.json(campus)
    } catch (err) {
        next(err);
    }
})

module.exports = router