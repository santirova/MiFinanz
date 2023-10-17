const { categoryBillPostController, catGetController } = require('../controllers/categoryBillsController');

catBillPostHandler = async (req, res) => {
    const { name } = req.body;
    try {
        const category = await categoryBillPostController(name);
        res.status(201).json({ message: 'Categoria registrada con éxito', category});
    } catch (error) {
        console.log(error.message)
    }
};

catGetHandler = async (req, res) => {
    try{
        const allCategory = await catGetController();
        res.status(200).send(allCategory)
    } catch (error){
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
module.exports = { catBillPostHandler, catGetHandler };