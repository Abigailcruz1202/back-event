const { Sequelize } = require('sequelize');
const { database } = require('../config');
require('dotenv').config();

const {
    DB_USER, DB_PASSWORD, DB_HOST,
  } = process.env;


const sequelize = new Sequelize(`postgres://zhdfxnao:cXuuyfoyKt9vxEUWiZ4NzEKZIhA2WvRZ@kesavan.db.elephantsql.com/zhdfxnao`, {
    // Hace que no muestre todos los mensajes de conexion con SQL en la consola cuando inicias el servidor.
    logging: false,
})
module.exports = sequelize;