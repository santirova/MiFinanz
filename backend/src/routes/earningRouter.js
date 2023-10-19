const {Router} = require('express');
const { getEarnigsByUserIdHandler, filterCategoryEarnigsByUserIdHandler, postEarnigsByUserIdHandler, putEarnigsByUserIdHandler, deleteEarnigsByUserIdHandler } = require('../handlers/earningHandlers');
const { authMiddleware } = require('../middleware/authmiddleware');


const earningRouter = Router();

earningRouter.get('/:UserId', getEarnigsByUserIdHandler);
earningRouter.get('/', filterCategoryEarnigsByUserIdHandler);
earningRouter.post('/:UserId', postEarnigsByUserIdHandler);
earningRouter.put('/:id',putEarnigsByUserIdHandler);
earningRouter.delete('/:id',deleteEarnigsByUserIdHandler);

module.exports ={earningRouter};