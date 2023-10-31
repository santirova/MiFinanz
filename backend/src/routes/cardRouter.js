const {Router} = require('express');
const { getCardsByUserIdHandler,postCardHandler, putCardHandler, deleteCardHandler } = require('../handlers/cardHandlers');
const { User, Card } = require('../db')

const cardRouter = Router();

cardRouter.post('/:userId', postCardHandler)
cardRouter.get('/:userId',getCardsByUserIdHandler);
cardRouter.put('/:cardId', putCardHandler);
cardRouter.delete('/:cardId', deleteCardHandler);

cardRouter.delete('/:userId/cards', async (req, res) => {
    try {
      const userId = req.params.userId;

      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      await Card.destroy({ where: { UserId: userId } });
  
      res.status(204).end(); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });
  

module.exports = {cardRouter};