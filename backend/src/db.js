const {Sequelize} = require('sequelize')
require('dotenv').config()
const UserFunction = require('./models/user')


const sequelize = new Sequelize(
    process.env.DB_URI,
    {logging:false}
)

//MODELS FUNCTIONS
UserFunction(sequelize);


// ASSOCIATIONS


module.exports = {sequelize}