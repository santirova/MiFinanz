"use client";
import { use, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  getAllCardsAction,
  addCardAction,
  deleteCardAction,
} from "@/redux/features/creditCardSlice";

const CreditCard = () => {
  const dispatch = useAppDispatch();

  const cards = useAppSelector((state) => state.cards);
  const userId = useAppSelector((state) => state.userInfo.user.id);
  // Editable inputs
  const [name, setName] = useState("");
  const [bankName, setBankName] = useState("");
  const [branch, setBranch] = useState("");
  const [addView, setAddView] = useState(false);

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

  useEffect(() => {
    console.log("Solicitando tarjetas");
    if (cards.length === 0) {
      dispatch(getAllCardsAction(userId));
    }
  }, [handleAddCard, handleDeleteCard]);

  return (
    <>
      <section className="grid grid-cols-4 w-full dark:bg-mDarkGray">
        {/* add card */}
        <div className="flex flex-col items-center justify-center w-48 h-48 p-4 m-4 bg-mLightGray rounded-lg shadow-md dark:bg-mDarkGray">
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
            className="flex flex-col items-center justify-center w-48 h-48 p-4 m-4 bg-mLightGray rounded-lg shadow-md dark:bg-mDarkGray"
          >
            <h2 className="text-xl font-bold text-white text-center">
              {card.name}
            </h2>
            <h2 className="text-xl font-bold text-white text-center">
              {card.name}
            </h2>
            <div className="flex flex-col items-center justify-center w-full h-full mt-4">
              <h2 className="text-2xl font-bold text-center text-mWhite">
                {card.bankName}
              </h2>
              <div className="flex items-center justify-center w-full mt-4">
                <h3 className="text-sm text-mWhite">{card.branch}</h3>
              </div>
            </div>
            <button
              onClick={() => handleDeleteCard(card.id)}
              className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
            >
              Eliminar
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default CreditCard;
