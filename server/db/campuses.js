const db = require('./database')
const Sequelize = require('sequelize')

const Campuses = db.define('campuses', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    image: {
        type: Sequelize.STRING,
        validate: {
            isUrl: true,
        },
        defaultValue: 'https://i.pinimg.com/originals/17/1a/9c/171a9c1db6d7c65e132d55327913a05d.jpg',
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
    description: {
        type: Sequelize.TEXT,

    }
});

module.exports = Campuses
