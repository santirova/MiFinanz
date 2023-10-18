const {Router} = require('express');
const { getCardsByUserIdHandler } = require('../handlers/cardHandlers');

const cardRouter = Router();

cardRouter.get('/userCards',getCardsByUserIdHandler);


module.exports = {cardRouter};