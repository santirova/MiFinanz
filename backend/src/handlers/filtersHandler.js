const { filterEarningsController, filterEarningsbydataController, orderEarningsbydataController, filterBillsController } = require("../controllers/filtersControllers");
//Earnings
const  filterEarningsHandler = async (req,res) => {
    const {catId,amount} = req.query
    try {
        const category = await filterEarningsController(catId,amount)
        res.status(200).send(category)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})

    }
}

const filterEarningsbydataHandler = async (req,res) => {
  
    try {
        const category = await filterEarningsbydataController(req,res)
        res.status(200).send(category)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})

    }
}

const orderEarningsbydataHandler = async (req,res) => {
    try {
        const prueba="hola"
        const category = await orderEarningsbydataController(prueba)
        res.status(200).send(category)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})

    }
}

//Bills

const  filterBillsHandler = async (req,res) => {
    const {UserId} = req.params
    const {catId,payment_method} = req.query
    try {
        const bills = await filterBillsController(catId,payment_method,UserId)
        res.status(200).send(bills)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})

    }
}

module.exports={filterEarningsHandler, filterEarningsbydataHandler,orderEarningsbydataHandler,filterBillsHandler}