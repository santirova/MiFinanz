const { Router } = require('express');
const { catBillPostHandler, catGetHandler } = require('../handlers/CategoryBillHandler');

const categoryBills = Router();

categoryBills.post('/', catBillPostHandler);
categoryBills.get('/', catGetHandler);

module.exports ={ categoryBills };