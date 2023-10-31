import { addCardAction } from "@/redux/features/creditCardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { FcSimCardChip } from "react-icons/fc";

const AddCard = ({ handleAddView, openAddView }) => {
  const userId = useAppSelector((state) => state.userInfo.user.id);
  const dispatch = useAppDispatch();

  // Editable inputs
  const [name, setName] = useState("");
  const [bankName, setBankName] = useState("");
  const [branch, setBranch] = useState("");

  const handleAddCard = async (name, bankName, branch) => {
    // reset inputs
    await dispatch(addCardAction(userId, name, bankName, branch));
    console.log("Agregando tarjeta");
    setName("");
    setBankName("");
    setBranch("");
    // close add view
    handleAddView();
  };
  return (
    <div>
      <div className="flex flex-col w-72 h-auto min-h-[200px] hover:scale-[1.01] p-3 m-4 rounded-lg items-center justify-center shadow-lg shadow-gray-400 dark:shadow-gray-900 bg-mLightGray dark:bg-mBlack">
        <div className="flex flex-col items-center justify-center w-full h-full">
          {!openAddView ? (
            <button
              onClick={handleAddView}
              className="text-2xl font-bold text-center text-white hover:text-gray-400"
            >
              Agregar Tarjeta
            </button>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full mt-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Banco"
                className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                onChange={(e) => setBankName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Franquicia"
                className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                onChange={(e) => setBranch(e.target.value)}
              />
              <div className="container-btns flex">
                <button
                  className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                  onClick={() => handleAddView()}
                >
                  Cancelar
                </button>
                <button
                  className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                  onClick={() => handleAddCard(name, bankName, branch)}
                >
                  Agregar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCard;
