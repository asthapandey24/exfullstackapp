const Sequelize = require('sequelize')

const sequelize = new Sequelize('exfullstackapp','root','root',
{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize 