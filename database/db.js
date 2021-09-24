const { Sequelize } = require('sequelize');
const { database } = require('../config');
require('dotenv').config();

const {
    DB_USER, DB_PASSWORD, DB_HOST,
  } = process.env;

// Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize(
//     database.database,
//     database.username,
//     database.password, {
//         host: database.host,
//         dialect: 'postgres'
//     }
// );

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`, {
    // Hace que no muestre todos los mensajes de conexion con SQL en la consola cuando inicias el servidor.
    logging: false
})
module.exports = sequelize;