const { Earning, User ,CategoryEarning } = require("./../db.js");


const getEarningByUserIdController=async(UserId)=>{
   const user = await User.findByPk(UserId);
   console.log(UserId);
   if (!user) {
    return "Usuario no exite"
   }
    const earnings = await Earning.findAll({where: {UserId}});
    if (earnings.length == 0) {
    return "El usuario no tiene Ingreso"
    }
    //  console.log(earning);
   return earnings
 }

 const filterCategoryEarningByUserIdController=async(req)=>{
  const {id} =req.query
  if (!id) {
    return "Incluye la categoria"
  }

  const CategoryEarnings = await Earning.findAll(
    {where : {CategoryEarningId: id}},
    {include : {
       model: CategoryEarning,
        attributes :["name"]}
      }
      )

 if(CategoryEarning.length===0){
  return"No hay Ingresos asociados con esa categoria"
 }
 
   //  console.log(earning);
  return CategoryEarnings
}


const postEarningByUserIdController= async (amount, date, name, CategoryEarningId, UserId)=>{
  // Aca hago las validaciones
    const earning = await Earning.create({amount, date, name, CategoryEarningId, UserId});
  return earning;

}


const putEarningByUserIdController = async( id, amount, date, name, CategoryEarningId)=>{
  const edict_earning = await Earning.findByPk(id);
  console.log(edict_earning);

  if (!edict_earning) {
    return`No existe el reguistro :${edict_earning}` ;
  }
  if (edict_earning.length==0) {
    return "Registro vacio"
  }
  //guardar cambios
  const earning = await Earning.update({amount, date, name, CategoryEarningId}, {where:{id}});
  return earning
}


const deleteEarningByUserIdController = async(id)=>{

  const earning = await Earning.findByPk(id);
  if (!earning) {
    return`No existe el Registro` ;
  }
   //eliminar la ingreso
    await earning.destroy();
    return'Registro Eliminado con Exito!!'
  }



module.exports={
  getEarningByUserIdController,
  filterCategoryEarningByUserIdController,
  postEarningByUserIdController,
  putEarningByUserIdController,
  deleteEarningByUserIdController
}