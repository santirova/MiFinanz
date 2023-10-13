const {Router} = require('express');
const { getEarnigsByUserIdHandler } = require('../handlers/earningHandlers');


const earningRouter = Router();

earningRouter.get('/:id',getEarnigsByUserIdHandler);


module.exports ={earningRouter};