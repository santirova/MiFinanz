const {User} = require('../db')
const { encrypt } = require('../helpers/bcrypt')
const getUserByIdController = async () => {
    const users = await User.findAll()
    console.log(users);
    return users
}

const postUserController = async (name,password,email) =>{
    console.log(password,name,email);
    const hashPassword = await encrypt(password)
    const newUser = User.create({
        name,
        email,
        password: hashPassword
    })
    return newUser
}
module.exports ={getUserByIdController,postUserController}