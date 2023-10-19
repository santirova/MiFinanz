const { earningsCategories } = require("../helpers/categories.js");
const {CategoryEarning} = require("./../db.js");

const postCategoryEarnignsByUserController = async (name) => {
    const categoryEarnigns = await CategoryEarning.create({name})
    return categoryEarnigns
}

//Arreglar
const getCategoryEarnignsByUserController = async (id) => {
    console.log(id);
    const categoryEarnigns = await CategoryEarning.findByPk(id);
    if (!categoryEarnigns) {
        return "La categoria no existe"
       } 
    return categoryEarnigns
}

const postMultiCatEarningsController = async () => {
    try {
        const categories = await CategoryEarning.bulkCreate(earningsCategories)
        return categories
    } catch (error) {
        console.log(error.message);
    }
    
}

module.exports = {getCategoryEarnignsByUserController,
postCategoryEarnignsByUserController,postMultiCatEarningsController}