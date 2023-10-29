const {Router} = require('express');
const { sumEarningsByCategoryHandler,sumBillsByCategoryHandler,sumBillsMonthHandler , earningVsBillHandler  } = require('../handlers/statsHandlers');

const statsRouter = Router();

statsRouter.use('/earningscategory/:userId',sumEarningsByCategoryHandler);
statsRouter.use('/billscategory/:userId',sumBillsByCategoryHandler);
statsRouter.use('/billsmonth/:userId',sumBillsMonthHandler);
statsRouter.use('/earningVsBill/:userId',earningVsBillHandler);


module.exports ={statsRouter}