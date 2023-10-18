const {Router} = require('express');
const {getCategoryEarnignsByUserIdHandler, postCategoryEarnignsByUserIdHandler} = require('../handlers/categoryEarnignHandlers');

const categoryEarningRouter = Router();

categoryEarningRouter.get('/', getCategoryEarnignsByUserIdHandler);
categoryEarningRouter.post('/',postCategoryEarnignsByUserIdHandler);

module.exports ={categoryEarningRouter};