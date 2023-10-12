const {Router} = require('express')
const { getUserByIdHandler } = require('../handlers/userHandlers')

const userRouter = Router()

userRouter.get('/detail',getUserByIdHandler)

module.exports = {userRouter}