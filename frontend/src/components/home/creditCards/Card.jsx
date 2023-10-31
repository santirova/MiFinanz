import { FcSimCardChip } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { useEffect, useState } from "react";
import {
  deleteCardAction,
  editCardAction,
} from "@/redux/features/creditCardSlice";
import { useAppDispatch } from "@/redux/hooks";

const Card = ({ cardData, setCardEdited }) => {
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState(false);
  const [card, setCard] = useState({
    name: cardData?.name || "",
    bankName: cardData?.bankName || "",
    branch: cardData?.branch || "",
  });

  useEffect(() => {
    console.log("Card Component");
  }, [cardData]);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleDeleteCard = async (id) => {
    await dispatch(deleteCardAction(id));
    console.log("Eliminando tarjeta");
  };

  const handleEditCard = async (id, name, bankName, branch) => {
    await dispatch(editCardAction(id, name, bankName, branch));
    console.log("Editando tarjeta");
    // close add view
    handleEditMode();
    setCardEdited(true);
  };

  const handleOnChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="flex flex-col w-72 h-auto min-h-[200px] m-4 rounded-lg shadow-lg shadow-gray-400 dark:shadow-gray-900 bg-mLightGray dark:bg-mBlack">
        {/* Top section of card */}
        <div className="grid grid-cols-2 py-2 px-4 gap-2 items-center bg-gray-600 dark:bg-black rounded-t-lg">
          <div className="flex items-center gap-2">
            <FcSimCardChip className="w-8 h-8" />
            <h2 className="text-lg font-semibold text-white">Tarjeta</h2>
          </div>
          <div className="flex items-center justify-end gap-3">
            <button onClick={() => handleDeleteCard(cardData.id)}>
              <MdDelete className="text-xl text-mWhite hover:text-mLightGray" />
            </button>
            <button onClick={handleEditMode}>
              <BiEdit className="text-xl text-white hover:text-mLightGray" />
            </button>
          </div>
        </div>
        {/* Body card */}
        <div className="flex flex-col p-3 gap-2 justify-center">
          {!editMode ? (
            <>
              <h2 className="text-lg font-semibold bg-transparent text-white text-center">
                {cardData?.name}
              </h2>

              <h2 className="text-lg font-semibold bg-transparent text-white text-center">
                {cardData?.bankName}
              </h2>

              <h2 className="text-lg font-semibold bg-transparent text-white text-center">
                {cardData?.branch}
              </h2>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full mt-4">
              <input
                type="text"
                placeholder="Nombre"
                value={card.name}
                name="name"
                className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                onChange={(e) => handleOnChange(e)}
              />
              <input
                type="text"
                placeholder="Banco"
                value={card.bankName}
                name="bankName"
                className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                onChange={(e) => handleOnChange(e)}
              />
              <input
                type="text"
                placeholder="Franquicia"
                value={card.branch}
                name="branch"
                className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                onChange={(e) => handleOnChange(e)}
              />
              <div className="container-btns flex">
                <button
                  className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                  onClick={() => handleEditMode()}
                >
                  Cancelar
                </button>
                <button
                  className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                  onClick={() =>
                    handleEditCard(
                      cardData.id,
                      card.name,
                      card.bankName,
                      card.branch
                    )
                  }
                >
                  Editar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
