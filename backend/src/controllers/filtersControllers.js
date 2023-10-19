const {Earning,CategoryEarning} = require('../db')
const filterEarningsController=async(catId,amount)=>{
    // if (!catId) {
    //   return "Incluye la categoria"
    // }
    const where = {}

    if (amount) {
        where.amount = amount
    }

    if(catId){
        where.CategoryEarningId = catId
    }
    const earnings = await Earning.findAll({
        where,
        include:[{
            model:CategoryEarning,
            attributes:["name"]
        }]  
    })
  
   if(earnings.length===0){
    return"No hay Ingresos asociados con esa categoria"
   }

    return earnings
  }

  module.exports = {filterEarningsController}