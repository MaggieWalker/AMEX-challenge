const router = require('express').Router();
const Campuses = require('../db/campuses');
const Students = require('../db/students');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campuses.findAll({
      include: [{ model: Students }],
    });
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const campus = await Campuses.findAll({
      include: [
        {
          model: Students,
          where: { id: req.params.id },
        },
      ],
    });
    if (!campus) res.sendStatus(404);
    else res.json(campus);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newCampus = await Campuses.create({
      name: req.body.name,
      address: req.body.address,
      description: req.body.description,
    });
    res.status(201).json(newCampus);
  } catch (err) {
    next(err);
  }
});

router.delete('/', async (req, res, next) => {
  try {
    await Campuses.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.json({ deletedCampus: req.body.id });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
