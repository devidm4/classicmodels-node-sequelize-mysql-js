require('./dotenv')

const { Sequelize } = require('sequelize');

console.log(process.env.DB_DIALECT)

const sequelize = new Sequelize ({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
});

module.exports = sequelize;