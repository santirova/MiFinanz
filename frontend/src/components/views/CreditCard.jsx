"use client";
import { use, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  getAllCardsAction,
  addCardAction,
  deleteCardAction,
} from "@/redux/features/creditCardSlice";
import { FcSimCardChip } from "react-icons/fc";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const CreditCard = () => {
  const dispatch = useAppDispatch();

  const cards = useAppSelector((state) => state.cards);
  const userId = useAppSelector((state) => state.userInfo.user.id);
  // Editable inputs
  const [name, setName] = useState("");
  const [bankName, setBankName] = useState("");
  const [branch, setBranch] = useState("");
  const [addView, setAddView] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };
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

  const handleDeleteCard = async (id) => {
    await dispatch(deleteCardAction(id));
    console.log("Eliminando tarjeta");
  };

  const handleAddView = () => {
    setAddView(!addView);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeBankName = (e) => {
    setBankName(e.target.value);
  };

  const handleChangeBranch = (e) => {
    setBranch(e.target.value);
  };

  useEffect(() => {
    console.log("Solicitando tarjetas");
    if (cards.length === 0) {
      dispatch(getAllCardsAction(userId));
    }
  }, [cards.length, userId]);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-4 w-full dark:bg-mDarkGray">
        {/* add card */}
        <div className="flex flex-col items-center justify-center w-56 h-48 p-4 m-4 rounded-lg shadow-md bg-mLightGray dark:bg-mBlack">
          <div className="flex flex-col items-center justify-center w-full h-full mt-4">
            {!addView ? (
              <button
                onClick={handleAddView}
                className="text-2xl font-bold text-center text-mWhite"
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
                <button
                  className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                  onClick={() => handleAddCard(name, bankName, branch)}
                >
                  Agregar
                </button>
              </div>
            )}
            <div></div>
          </div>
        </div>

        {/* Cards */}
        {cards?.map((card) => (
          <div
            key={card?.id}
            className="flex flex-col w-56 h-48 m-4 rounded-lg shadow-lg bg-mLightGray dark:bg-mBlack"
          >
            {/* Top section of card */}
            <div className="grid grid-cols-2 py-2 px-4 gap-2 items-center bg-gray-600 dark:bg-black rounded-t-lg">
              <div className="flex items-center gap-2">
                <FcSimCardChip className="w-8 h-8" />
                <h2 className="text-lg font-semibold text-white">Tarjeta</h2>
              </div>
              <div className="flex items-center justify-end gap-2">
                <button onClick={() => handleDeleteCard(card.id)}>
                  <MdDelete className="text-white" />
                </button>
                <button onClick={handleEditClick}>
                  <BiEdit className="text-white" />
                </button>
              </div>
            </div>
            {/* Body card */}
            <div className="flex flex-col p-3 gap-2 justify-center">
              <input
                type="text"
                className={`text-lg font-semibold bg-transparent text-white text-center`}
                value={editMode ? name : card.name}
                onChange={handleChangeName}
                readOnly={!editMode}
              />

              <input
                type="text"
                className={`text-md font-semibold bg-transparent text-mWhite text-center`}
                value={editMode ? bankName : card.bankName}
                onChange={handleChangeBankName}
                readOnly={!editMode}
              />

              <input
                type="text"
                className={`text-sm text-mWhite bg-transparent text-center`}
                value={editMode ? branch : card.branch}
                onChange={handleChangeBranch}
                readOnly={!editMode}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CreditCard;
