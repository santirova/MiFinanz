const { sumEarningsByCategoryController,sumBillsByCategoryController, sumBillsMonthControlle, earningVsBillController } = require("../controllers/statsController")


const sumEarningsByCategoryHandler = async (req,res) => {
    try {
        const {userId} = req.params
        const {month} = req.query
        const sumEarnings = await sumEarningsByCategoryController(userId,month)
        res.status(200).json(sumEarnings)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}

const sumBillsByCategoryHandler = async (req,res) => {
    try {
        const {userId} = req.params
        const {month} = req.query
        const response = await sumBillsByCategoryController(userId,month)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const sumBillsMonthHandler = async (req,res) => {
    try {
        const {userId} = req.params
        const {month} = req.query
        const sumBills = await sumBillsMonthControlle(userId, month)
        res.status(200).json(sumBills)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const earningVsBillHandler  = async (req,res) => {
    try {
        const {userId} = req.params
        const {month} = req.query
        const sumBills = await earningVsBillController(userId, month)
        res.status(200).json(sumBills)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}




module.exports = {sumEarningsByCategoryHandler,sumBillsByCategoryHandler, sumBillsMonthHandler, earningVsBillHandler }