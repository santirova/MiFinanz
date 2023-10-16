const {Router} = require('express')
const { getUserByIdHandler, postUserHandler } = require('../handlers/userHandlers')

const userRouter = Router()

userRouter.get('/detail',getUserByIdHandler)
userRouter.post('/register', postUserHandler)
module.exports = {userRouter}