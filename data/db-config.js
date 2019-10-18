const knex = require('knex');

const knexFile = require('../knexfile');

const dbEnv = process.env.DB_ENV || 'development'

module.exports = knex(knexFile[dbEnv]);