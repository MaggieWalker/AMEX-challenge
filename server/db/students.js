const db = require('./database');
const Sequelize = require('sequelize');

const Students = db.define('students', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  image: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
    defaultValue: 'https://msr7.net/images/generic-student-9.jpg',
  },
  GPA: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Students;
