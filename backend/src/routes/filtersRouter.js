const {Router} = require('express');
const { filterEarningsHandler } = require('../handlers/filtersHandler');
const filtersRouter = Router()

filtersRouter.get('/earnings',filterEarningsHandler)

module.exports= {filtersRouter}