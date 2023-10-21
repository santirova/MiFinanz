const {Router} = require('express');
const { filterEarningsHandler, filterEarningsbydataHandler, orderEarningsbydataHandler, filterBillsHandler } = require('../handlers/filtersHandler');
const filtersRouter = Router()

//Filtros earning
filtersRouter.get('/earnings',filterEarningsHandler)
filtersRouter.get('/', filterEarningsbydataHandler)
filtersRouter.get('/order', orderEarningsbydataHandler)
//filtros bills
filtersRouter.get('/bills/:UserId',filterBillsHandler)
module.exports= {filtersRouter}