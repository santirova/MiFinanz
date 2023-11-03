"use client";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { getAllCardsAction } from "@/redux/features/creditCardSlice";

import Card from "../home/creditCards/Card";
import AddCard from "../home/creditCards/AddCard";

const CreditCard = () => {
  const dispatch = useAppDispatch();
  const [cardEdited, setCardEdited] = useState(false);
  const cards = useAppSelector((state) => state.cards);
  const userId = useAppSelector((state) => state.userInfo.user.id);

  const [openAddView, setOpenAddView] = useState(false);

  const handleAddView = () => {
    setOpenAddView(!openAddView);
  };

  useEffect(() => {
    dispatch(getAllCardsAction(userId));
    setCardEdited(false);
  }, [cards.length, userId, cardEdited]);

  return (
    <>
      <section className="flex flex-wrap w-full max-h-[calc(100vh_-_70px)] overflow-auto">
        <AddCard handleAddView={handleAddView} openAddView={openAddView} />

        {cards?.map((cardData) => (
          <Card
            key={cardData.id}
            cardData={cardData}
            setCardEdited={setCardEdited}
          />
        ))}
      </section>
    </>
  );
};

export default CreditCard;
