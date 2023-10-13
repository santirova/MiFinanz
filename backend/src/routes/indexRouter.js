const {Router} = require('express');
const {userRouter} = require('./userRouter');
const {cardRouter} = require('./cardRouter');
const {earningRouter} = require('./earningRouter');
//const {earningRouter} = require('./earningRouter');

const router = Router();

// PRINCIPAL ROUTES 
router.use('/user', userRouter);
router.use('/card', cardRouter);
router.use('/earning', earningRouter);

//router.use('/earning', earningRouter);


module.exports = router