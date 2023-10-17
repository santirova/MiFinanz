const { Router }= require('express');
const {getBillByUserIdHandler, createBillHandler, deleteBillHandler, updateBillHandler } = require('../handlers/billsHandler');

const billsRouters = Router();

billsRouters.get('/user/:userId/bills', getBillByUserIdHandler)
billsRouters.post('/user/:userId', createBillHandler);
billsRouters.put('/:billId', updateBillHandler);
billsRouters.delete('/:billId', deleteBillHandler );

module.exports= billsRouters;