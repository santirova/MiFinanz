const {Earning,CategoryEarning} = require('../db')
const { Sequelize } = require('sequelize');

//filtrar las Categorias
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

  //filtro de fechas por rango y ordena 
  const filterEarningsbydateController=async(req,res)=>{
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

//Odenamiento por Fecha
  const orderEarningsbydateController = async(req, res)=>{
    //ojo la direccion solo puede ser ASC / DESC por que si no explota
  const {direction}=req.query
    const registrosOrdenados = await Earning.findAll({
      order: [['date', direction]],
    });
    return registrosOrdenados
  }

//Odenamiento por Monto
  const orderEarningsbyamountController = async(req, res)=>{
    //ojo la direccion solo puede ser ASC / DESC por que si no explota
  const {direction}=req.query
    const registrosOrdenados = await Earning.findAll({
      order: [['amount', direction]],
    });
    return registrosOrdenados
  }

  module.exports = {
     filterEarningsController,
     filterEarningsbydateController, 
     orderEarningsbydateController, 
     orderEarningsbyamountController}