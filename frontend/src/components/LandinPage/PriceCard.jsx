import React from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { priceCards } from "@/utils/data";

const PriceCard = () => {
  return (
    <section
      id="plus"
      className="grid grid-cols-1 h-[calc(100vh_-_0px)] w-full content-center justify-items-center flex-wrap text-mWhite sm:grid-cols-2 lg:grid-cols-3"
    >
      {priceCards?.map((item) => (
        <div
          id="container-card"
          className="grid w-[320px] h-[500px] bg-mDarkGray hover:border hover:border-solid hover:border-mYellow rounded-xl text-center p-8 gap-4"
          key={item.id}
        >
          <h2 className="font-bold">{item?.name}</h2>
          <div>
            <h3 className="text-mYellow text-4xl font-bold">{item?.price}$</h3>
            <p className="text-mBlue text-sm font-bold">por mes</p>
          </div>
          <ul className="grid gap-3 text-left">
            {item?.feautures?.map((feature) => (
              <div className="flex gap-2" key={`${item?.id}-${feature}`}>
                <GoCheckCircleFill className="text-mYellow rounded-full text-3xl" />
                <li>{feature}</li>
              </div>
            ))}
          </ul>
          <button className="p-2 bg-mYellow font-medium text-mBlack rounded-md">
            Try for free
          </button>
        </div>
      ))}
    </section>
  );
};

export default PriceCard;
