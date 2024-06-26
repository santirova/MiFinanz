const { Bill } = require('../db');
const {billUserGet, createBill} = require('../controllers/billsContorller');

const getBillByUserIdHandler = async (req,res) =>{
    try {
        const userId = req.params.userId;
        const Bills = await billUserGet(userId)
        res.status(200).send({Bills,message:'holasa'})
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

const createBillHandler = async (req, res) => {
    try {

      const userId = req.params.userId; 
      const { amount, name, date, payment_method, categoryId, cardId, frequency } = req.body;
  
      const bill = await createBill(userId, amount, date, name, payment_method, categoryId, cardId, frequency);
  
      res.status(201).json({ message: 'Gasto registrado con éxito', bill });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const deleteBillHandler = async (req, res) => {
    try {
      const billId = req.params.billId; 
  
     
      const bill = await Bill.findByPk(billId);
      if (!bill) {
        return res.status(404).json({ error: 'El gasto no se encontró.' });
      }
  
      await bill.destroy();
      res.status(204).send("Gasto eliminado con éxito"); // Respuesta exitosa sin contenido.
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const updateBillHandler = async (req, res) => {
    try {
      const billId = req.params.billId; 
      const { amount, name, date, payment_method, CategoryBillId, cardId, frequency } = req.body;
  
      const bill = await Bill.findByPk(billId);
      if (!bill) {
        return res.status(404).json({ error: error.message });
      }
  
      // Actualiza los campos del gasto según sea necesario.
      if (amount) {
        bill.amount = amount;
      }
      if (name) {
        bill.name = name;
      }
      if (date) {
        bill.date = date;
      }
      if (payment_method !== undefined) {
        bill.payment_method = payment_method;
      }
      if (CategoryBillId) {
        bill.CategoryBillId = CategoryBillId;
      }
      if (cardId) {
        bill.cardId = cardId;
      }
      if (frequency) {
        bill.frequency = frequency;
      }
  
      await bill.save();
      res.status(200).json({ message: 'Gasto actualizada con éxito', bill });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports = {getBillByUserIdHandler, createBillHandler, deleteBillHandler, updateBillHandler  }