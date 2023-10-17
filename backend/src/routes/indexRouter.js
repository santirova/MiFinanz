const {Router} = require('express');
const {userRouter} = require('./userRouter');
const {cardRouter} = require('./cardRouter');
const {earningRouter} = require('./earningRouter');
const { categoryEarningRouter } = require('./categoryEarningRouter');

const router = Router();

// PRINCIPAL ROUTES 
router.use('/user', userRouter);
router.use('/card', cardRouter);
router.use('/earning', earningRouter);
router.use('/categoryEarning', categoryEarningRouter);


module.exports = router