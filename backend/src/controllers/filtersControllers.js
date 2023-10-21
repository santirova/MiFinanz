const {Earning,CategoryEarning,Bill,CategoryBill} = require('../db')
const { Sequelize } = require('sequelize');

//Earnings
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

  const filterEarningsbydataController = async (req,res) => {
    const {fechaInicio} =req.query;
    const {fechaFin} = req.query;

  // Filtrar registros entre las fechas de inicio y oderna de forma ascendente  
  const registrosFiltrados = await Earning.findAll({
    where: {
      date: {
        [Sequelize.Op.between]: [fechaInicio, fechaFin],
      },
    },
    order: [['date', 'ASC']],
  });

   return registrosFiltrados
  }

  const orderEarningsbydataController = async()=>{
    const registrosOrdenados = await Earning.findAll({
      order: [['date', 'ASC']],
    });
    return registrosOrdenados
  }
//Bills
const filterBillsController=async(catId,payment_method,UserId)=>{
    const where = {
        UserId
    }

    if (payment_method) {
        where.payment_method = payment_method
    }

    if(catId){
        where.CategoryBillId = catId
    }
    const bills = await Bill.findAll({
        where,
        include:[{
            model:CategoryBill,
            attributes:["name"]
        }]  
    })
  
   if(bills.length===0){
    return"No se encontraron gastos"
   }

    return bills
  }
  module.exports = {filterEarningsController, filterEarningsbydataController, orderEarningsbydataController,filterBillsController}