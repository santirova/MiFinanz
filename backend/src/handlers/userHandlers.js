const {getUserByIdController,postUserController} = require('../controllers/userControllers')

const getUserByIdHandler = async (req,res) =>{
    try {
        const user = await getUserByIdController()
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
};

const postUserHandler = async (req,res) =>{
    const {name,password,email} = req.body
    try {
        const newUser = await postUserController(name,password,email)
        res.status(200).send(newUser)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}


module.exports = {getUserByIdHandler,postUserHandler}