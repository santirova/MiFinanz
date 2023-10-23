const {Router} = require('express');
const { sumEarningsByCategoryHandler,sumBillsByCategoryHandler } = require('../handlers/statsHandlers');

const statsRouter = Router();

statsRouter.use('/earningscategory/:userId',sumEarningsByCategoryHandler);
statsRouter.use('/billscategory/:userId',sumBillsByCategoryHandler);



module.exports ={statsRouter}