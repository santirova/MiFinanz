const {Router} = require('express');
const {getCategoryEarnignsByUserIdHandler, postCategoryEarnignsByUserIdHandler,postMultiCatEarningsHandler} = require('../handlers/categoryEarnignHandlers');

const categoryEarningRouter = Router();

categoryEarningRouter.get('/:id', getCategoryEarnignsByUserIdHandler);
categoryEarningRouter.post('/',postCategoryEarnignsByUserIdHandler);
categoryEarningRouter.post('/multi',postMultiCatEarningsHandler);

module.exports ={categoryEarningRouter};