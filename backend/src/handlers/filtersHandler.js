const { filterEarningsController } = require("../controllers/filtersControllers");

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

module.exports={filterEarningsHandler}