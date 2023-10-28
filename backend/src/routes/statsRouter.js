const {Router} = require('express');
const { sumEarningsByCategoryHandler,sumBillsByCategoryHandler,sumBillsMonthHandler, xDaybillsHandler  } = require('../handlers/statsHandlers');

const statsRouter = Router();

statsRouter.use('/earningscategory/:userId',sumEarningsByCategoryHandler);
statsRouter.use('/billscategory/:userId',sumBillsByCategoryHandler);
statsRouter.use('/billsmonth/:userId',sumBillsMonthHandler);
statsRouter.get('/billsDayxCard/:userId', xDaybillsHandler);


module.exports ={statsRouter}