//const {getEarningsByUserIdController} = require("../controllers/earnignControllers")

const { getEarningByUserIdController } = require("../controllers/earnignControllers")

const getEarnigsByUserIdHandler = async (req,res) => {
    try {
        const {id}= req.params;
        const earnings = getEarningByUserIdController(id)
        res.status(200).send(earnings)
    } catch (error) {
        res.status(400).send({error:error.messages})
    }
}

module.exports = {getEarnigsByUserIdHandler}