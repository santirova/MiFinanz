const {Router} = require('express')
const { getUserByIdHandler, postUserHandler, loginHandler } = require('../handlers/userHandlers')

const userRouter = Router()

userRouter.get('/detail',getUserByIdHandler)
//AUTH
userRouter.post('/register', postUserHandler)
userRouter.post('/login', loginHandler)
module.exports = {userRouter}