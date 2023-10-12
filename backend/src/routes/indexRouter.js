const {Router} = require('express');
const {userRouter} = require('./userRouter');
const {cardRouter} = require('./cardRouter');

const router = Router();

// PRINCIPAL ROUTES 
router.use('/user', userRouter);
router.use('/card', cardRouter);


module.exports = router