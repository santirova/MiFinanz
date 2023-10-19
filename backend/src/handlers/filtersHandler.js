const { filterEarningsController, filterEarningsbydataController, orderEarningsbydataController } = require("../controllers/filtersControllers");

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

module.exports={filterEarningsHandler, filterEarningsbydataHandler,orderEarningsbydataHandler}