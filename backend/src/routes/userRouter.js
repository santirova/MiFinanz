const {Router} = require('express')
<<<<<<< HEAD
const { getUserByIdHandler, postUserHandler, loginHandler,forgotPasswordHandler ,resetPasswordHandler} = require('../handlers/userHandlers')
=======
const { getUserByIdHandler,
    postUserHandler, 
    loginHandler,
    forgotPasswordHandler,
    resetPasswordHandler,
    validateTokenHandler
} = require('../handlers/userHandlers')
>>>>>>> temp-branch

const userRouter = Router()

userRouter.get('/detail',getUserByIdHandler)
//AUTH
userRouter.post('/register', postUserHandler)
userRouter.post('/login', loginHandler)
userRouter.post('/forgot-password',forgotPasswordHandler)
userRouter.post('/reset-password',resetPasswordHandler)
<<<<<<< HEAD
=======
userRouter.get('/validate-token', validateTokenHandler)
>>>>>>> temp-branch
module.exports = {userRouter}