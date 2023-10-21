const {Router} = require('express');
const { filterEarningsHandler, filterEarningsbydateHandler, orderEarningsbydateHandler,  orderEarningsbyamountHandler } = require('../handlers/filtersHandler');
const filtersRouter = Router()

filtersRouter.get('/earnings',filterEarningsHandler)
filtersRouter.get('/', filterEarningsbydateHandler)
filtersRouter.get('/order-date', orderEarningsbydateHandler)
filtersRouter.get('/order-amount', orderEarningsbyamountHandler)

module.exports= {filtersRouter}