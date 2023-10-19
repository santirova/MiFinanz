const {Router} = require('express');
const {getCategoryEarnignsHandler, postCategoryEarnignsByUserIdHandler} = require('../handlers/categoryEarnignHandlers');

const categoryEarningRouter = Router();

categoryEarningRouter.get('/', getCategoryEarnignsHandler);
categoryEarningRouter.post('/',postCategoryEarnignsByUserIdHandler);

module.exports ={categoryEarningRouter};