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

module.exports = router
