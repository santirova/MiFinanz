const {User,CategoryEarning,Earning,Bill,CategoryBill,sequelize} = require('../db')


const sumEarningsByCategoryController = async (UserId,month) => {
    const user = await User.findByPk(UserId)
    console.log(user);
    if (!user) {
        return {
            error: 'ID de usuario inválido',
        };
    }
    if (!month || month > 12 || month < 1) {
        return {error:'El mes enviado es incorrecto, deberia ser entre 1 y 12'}
    }
    const response = await Earning.findAll({
        where: {
            UserId,
            date: sequelize.literal(`YEAR(date) = YEAR(CURRENT_DATE) AND MONTH(date) = ${month}`)
        },
        attributes: [
            [sequelize.col('CategoryEarning.name'), 'category_name'],
            [sequelize.fn('SUM', sequelize.col('amount')), 'ingresos_totales'],
        ],
        include: {
            model: CategoryEarning,
            attributes: [],
        },
        group: ['CategoryEarning.name'],  
    });
    if (!response.length) {
        return `No se encontraron ingresos para el mes indicado: ${month} `
    }
    return response;
};

const sumBillsByCategoryController = async (UserId,month) => {
    const user = await User.findByPk(UserId)
    if (!user) {
        return {
            error: 'ID de usuario inválido',
        };
    }
    if (!month || month > 12 || month < 1) {
        return {error:'El mes enviado es incorrecto, deberia ser entre 1 y 12'}
    }
    const response = await Bill.findAll({
        where: {
            UserId,
            date: sequelize.literal(`YEAR(date) = YEAR(CURRENT_DATE) AND MONTH(date) = ${month}`)
        },
        attributes: [
            [sequelize.col('CategoryBill.name'), 'category_name'],
            [sequelize.fn('SUM', sequelize.col('amount')), 'ingresos_totales'],
        ],
        include: {
            model: CategoryBill,
            attributes: [],
        },
        group: ['CategoryBill.name'],  
    });
    if (!response.length) {
        return `No se encontraron ingresos para el mes indicado: ${month} `
    }
    return response;
}


const sumBillsMonthControlle = async (UserId, month) => {
    console.log(month);
    
    const user = await User.findByPk(UserId)
    
    if (!user) {
        return {
            error: 'El usuario no exite',
        };
    }

    if (!month|| month > 12 || month < 1) {
        return {error:'El mes enviado es incorrecto, deberia ser entre 1 y 12'}
    }
    const response = await Bill.findAll({
        where: {
            UserId,
         date: sequelize.literal(`YEAR(date) = YEAR(CURRENT_DATE) AND MONTH(date) = ${month}`)
        },
        attributes: [
          [sequelize.fn('MONTH', sequelize.col('date')), 'month'],
        [sequelize.fn('SUM', sequelize.col('amount')), 'total_monto']
        ],
        group: ['month'],
        raw: true
      })
    if (response.length==0) {
        return `El Mes no tiene Gatos Asociados `
    }
    return response;
}

const obtenerDatosParaGrafico = async (userId) => {
    try {
        const response = await Bill.findAll({
            where: {
                UserId: userId,
            },
            attributes: [
                [sequelize.col('date'), 'fecha'],
                [sequelize.fn('SUM', sequelize.col('amount')), 'total_gasto'],
                'payment_method', // Incluye el método de pago en el resultado
            ],
            group: ['date', 'payment_method'], // Agrupa por fecha y método de pago
            order: ['date'],
        });
        
        if (!response.length) {
            return `No se encontraron gastos para el usuario indicado`;
        }
        
        return response;
      } catch (error) {
        console.error('Error en la consulta:', error);
        throw error;
      }
    };

const earningVsBillController = async (UserId, month ) => {
    
    const user = await User.findByPk(UserId)
    
    if (!user) {
        return {
            error: 'El usuario no exite',
        };
    }

    if (!month|| month > 12 || month < 1) {
        return {error:'El mes enviado es incorrecto, deberia ser entre 1 y 12'}
    }

//Suma todos los ingresos por mes de un usuario 

    const sumEarnings = await Earning.findAll({
        where: {
            UserId,
         date: sequelize.literal(`YEAR(date) = YEAR(CURRENT_DATE) AND MONTH(date) = ${month}`)
        },
        attributes: [
         
        [sequelize.fn('SUM', sequelize.col('amount')), 'sumEarnings']
        ],
        raw: true
      })
      
      const sumearnings = parseInt(sumEarnings[0].sumEarnings) ;
      
      if (sumEarnings[0].sumEarnings===null) {
          return `El usuario no tiene ingresos asociados  `
        }
        console.log(sumearnings);

//Suma todos los Gatos por mes de un usuario 
    const sumBill = await Bill.findAll({
        where: {
            UserId,
         date: sequelize.literal(`YEAR(date) = YEAR(CURRENT_DATE) AND MONTH(date) = ${month}`)
        },
        attributes: [  
        [sequelize.fn('SUM', sequelize.col('amount')), 'sumBill']
        ],
        raw: true
      })
    const sumbill = parseInt(sumBill[0].sumBill) 

    if (sumBill[0].sumBill===null) {
    return `El usuario no tiene Gatos asociados`
    }
console.log(sumbill);

   //Operacion para intepretar los resultados 

    const neto = sumearnings - sumbill

    const response ={
        sumearnings,
        sumbill,
        neto
    } 
    return   response  ;

 }

module.exports = {
    sumEarningsByCategoryController,
    sumBillsByCategoryController,
    sumBillsMonthControlle,
    obtenerDatosParaGrafico,
    earningVsBillController
}