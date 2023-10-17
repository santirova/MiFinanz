const {User} = require('../db');
const { encrypt, compare } = require('../helpers/bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const secretKey = process.env.SECRET_KEY 

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
const loginController = async (email,password) => {
    const user = await User.findOne({
        where:{
            email:email
        }
    })

    if (!user) {
        return "Usuario invalido"
    }
    const checkPassword = await compare(password,user.password);

    if (checkPassword) {
        const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
            expiresIn: '1h' 
        });
        return {
            token: token,
            user: user
        };
    }

    if (!checkPassword) {
        return {
            error:"Contraseña incorrecta"
        }
    }
}
module.exports ={getUserByIdController,postUserController,loginController}