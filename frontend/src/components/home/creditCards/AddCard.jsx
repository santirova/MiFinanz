import { addCardAction } from "@/redux/features/creditCardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { FcSimCardChip } from "react-icons/fc";

const AddCard = ({ handleAddView, openAddView }) => {
  const userId = useAppSelector((state) => state.userInfo.user.id);
  const dispatch = useAppDispatch();

  const [card, setCard] = useState({
    name: "",
    bankName: "",
    branch: "",
  });

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    // Verifica y corta el valor si excede los 20 caracteres
    const truncatedValue = inputValue.slice(0, 20);
    setCard({
      ...card,
      [e.target.name]: truncatedValue,
    });
  };

  const handleAddCard = async (e, name, bankName, branch) => {
    e.preventDefault();
    // reset inputs
    await dispatch(addCardAction(userId, name, bankName, branch));
    // close add view
    handleAddView();
    setCard({
      name: "",
      bankName: "",
      branch: "",
    });
  };

  return (
    <div>
      <div className="flex flex-col w-72 h-auto min-h-[200px] hover:scale-[1.01] p-3 m-4 rounded-lg items-center justify-center shadow-lg shadow-gray-400 dark:shadow-gray-900 bg-mLightGray dark:bg-mBlack">
        <div className="flex flex-col items-center justify-center w-full h-full">
          {!openAddView ? (
            <button
              onClick={handleAddView}
              className="w-full min-h-[150px] text-2xl font-bold text-center text-white hover:text-gray-400"
            >
              Agregar Tarjeta
            </button>
          ) : (
            <form
              onSubmit={(e) =>
                handleAddCard(e, card.name, card.bankName, card.branch)
              }
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <input
                type="text"
                placeholder="Nombre"
                name="name"
                className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                onChange={(e) => handleOnChange(e)}
                required
              />
              <input
                type="text"
                placeholder="Banco"
                name="bankName"
                className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                onChange={(e) => handleOnChange(e)}
                required
              />
              <input
                type="text"
                placeholder="Franquicia"
                name="branch"
                className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                onChange={(e) => handleOnChange(e)}
                required
              />
              <div className="container-btns flex">
                <button
                  className="w-full h-10 p-2 m-2 text-white bg-mDarkGray rounded-md hover:bg-gray-700"
                  onClick={() => handleAddView()}
                >
                  Cancelar
                </button>
                <button
                  className="w-full h-10 p-2 m-2 min-w-[90px] text-white bg-mDarkGray rounded-md hover:bg-gray-700"
                  type="submit"
                >
                  Agregar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCard;
