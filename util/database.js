const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'dummypass', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;