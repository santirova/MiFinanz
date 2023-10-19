const {CategoryEarning} = require("./../db.js");

const postCategoryEarnignsByUserController = async (name) => {
    const categoryEarnigns = await CategoryEarning.create({name})
    return categoryEarnigns
}


const getCategoryEarnignsController = async (id) => {
    console.log(id);

    try {
        const categoryEarnigns = await CategoryEarning.findAll();
    
        if (categoryEarnigns.length == 0) {
            return "No tiene registro"
            }
        return categoryEarnigns
    } catch (error) {
        console.log(error);
    }
    //const categoryEarnigns = await CategoryEarning.findByPk({where:{id}});
    
   
}


module.exports = {getCategoryEarnignsController,
postCategoryEarnignsByUserController}