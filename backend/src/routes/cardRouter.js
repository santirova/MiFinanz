const {Router} = require('express');
const { getCardsByUserIdHandler,postCardHandler, putCardHandler, deleteCardHandler } = require('../handlers/cardHandlers');
const { User, Card } = require('../db')

const cardRouter = Router();

cardRouter.post('/:userId', postCardHandler)
cardRouter.get('/:userId',getCardsByUserIdHandler);
cardRouter.put('/:cardId', putCardHandler);
cardRouter.delete('/:cardId', deleteCardHandler);


module.exports = {cardRouter};