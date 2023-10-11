const {Sequelize} = require('sequelize')
require('dotenv').config()
const UserFunction = require('./models/user')
const CategoryBillFunction = require('./models/categoryBill')
const CategoryEarningFunction = require('./models/categoryEarning')
const BillFunction = require('./models/bill')
const SavingFunction =require('./models/saving')

const sequelize = new Sequelize(
    process.env.DB_URI,
    {logging:false}
)

//MODELS FUNCTIONS
UserFunction(sequelize);
CategoryEarningFunction(sequelize);
CategoryBillFunction(sequelize);
BillFunction(sequelize)
SavingFunction(sequelize)


// ASSOCIATIONS


module.exports = {sequelize}