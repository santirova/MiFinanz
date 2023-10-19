const {Router} = require('express');
const { filterEarningsHandler, filterEarningsbydataHandler, orderEarningsbydataHandler } = require('../handlers/filtersHandler');
const filtersRouter = Router()

filtersRouter.get('/earnings',filterEarningsHandler)
filtersRouter.get('/', filterEarningsbydataHandler)
filtersRouter.get('/order', orderEarningsbydataHandler)

module.exports= {filtersRouter}