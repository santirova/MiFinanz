"use client";
import { Button, Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import TagSVG from "@/assets/shared/Tags.jsx";
import NameSVG from "@/assets/shared/Description.jsx";
import DateSVG from "@/assets/shared/Date.jsx";
import CashSVG from "@/assets/shared/Cash.jsx";
import RepeatSVG from "@/assets/shared/Repeat.jsx";
import { useForm, Controller } from "react-hook-form";
import { setSection } from "@/redux/features/activeSectionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { getAllCategoryBill } from "@/redux/features/bill.Slice";
import { getAllCardsAction } from "@/redux/features/creditCardSlice";

const GastosForm = ({ isDarkMode, handleSubmitForm }) => {
  const [activeButton, setActiveButton] = useState("Efectivo");
  const categories = useAppSelector((state) => state.bill.category);
  const cards = useAppSelector((state) => state.cards);
  const userId = useAppSelector((state) => state.userInfo.user.id);

  const dispatch = useAppDispatch();
  const handleButtonSelect = (button) => {
    //Para seleccionar Efectivo o tarjeta
    setActiveButton(button);
  };

  useEffect(() => {
    dispatch(getAllCategoryBill());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCardsAction(userId));
  }, [userId, cards.length]);

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    defaultValues: {
      amount: "",
      name: "",
      date: "",
      categoryId: "",
      frequency: "",
      cardId: "",
    },
  });

  const submit = (data) => {
    const payment_method = activeButton === "Efectivo" ? false : data.cardId; // si activeButton es Efectivo enviamos fase de lo contrario enviamos el id de la tarjeta seleccionada

    // Envía a la función handleSubmitForm el objeto data y payment_method
    const formData = {
      ...data,
      payment_method,
    };

    handleSubmitForm(formData);
    reset();
  };

  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };
  return (
    <section className="flex items-center justify-center flex-col">
      <div className="m-5 p-2  flex justify-between gap-5 bg-mlightGray text-mWhite border rounded-xl border-mBlack dark:border-mWhite dark:bg-mDarkGray">
        <button
          type="button"
          className={`text-mBlack dark:text-mWhite px-2 rounded-xl ${
            activeButton === "Efectivo" && "bg-mLightGray"
          }`}
          onClick={() => handleButtonSelect("Efectivo")}
        >
          Efectivo
        </button>
        <button
          type="button"
          className={`text-mBlack dark:text-mWhite px-2 rounded-xl ${
            activeButton === "TARJETA" && "bg-mLightGray"
          }`}
          onClick={() => handleButtonSelect("TARJETA")}
        >
          TARJETA
        </button>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        {activeButton === "TARJETA" && (
          <Controller
            name="cardId"
            control={control}
            rules={{ required: "Debe seleccionar una tarjeta" }}
            render={({ field }) => (
              <div className="w-72 flex items-center mb-4">
                <div className="mr-2">
                  <CashSVG
                    fillColor={isDarkMode === "dark" ? "#EEEEEE" : "#000"}
                  />
                </div>
                <div className="flex-col w-72">
                  <Select
                    label="Tarjeta*"
                    name="cardId"
                    color={isDarkMode === "dark" ? "light-blue" : "gray"}
                    {...field}
                    required={true}
                    value={cards.find((card) => card.id === field.value)?.name}
                    onChange={field.onChange}
                  >
                    {cards &&
                      cards.map((card) => (
                        <Option key={card.id} value={card.id.toString()}>
                          {card.name}
                        </Option>
                      ))}
                  </Select>
                  {errors.cardId && (
                    <div className="text-xs text-red-500 ">
                      {errors.cardId.message}
                    </div>
                  )}
                </div>
              </div>
            )}
          />
        )}

        <Controller
          name="amount"
          control={control}
          rules={{ required: "Debe ingresar el Total del gasto" }}
          render={({ field }) => (
            <div className="w-72 flex items-center mb-4">
              <div className="mr-2">
                <CashSVG
                  fillColor={isDarkMode === "dark" ? "#EEEEEE" : "#000"}
                />
              </div>
              <div className="flex-col w-72">
                <Input
                  label="Total"
                  type="number"
                  name="amount"
                  color={isDarkMode === "dark" ? "white" : "black"}
                  {...field}
                  required={true}
                />
                {errors.amount && (
                  <div className="text-xs text-red-500 ">
                    {errors.amount.message}
                  </div>
                )}
              </div>
            </div>
          )}
        />

        <Controller
          name="name"
          control={control}
          rules={{ required: "Debe ingresar el nombre del gasto" }}
          render={({ field }) => (
            <div className="w-72 flex items-center mb-4">
              <div className="mr-2">
                <NameSVG
                  fillColor={isDarkMode === "dark" ? "#EEEEEE" : "#000"}
                />
              </div>
              <div className="flex-col w-72">
                <Input
                  label="Nombre"
                  type="text"
                  name="name"
                  color={isDarkMode === "dark" ? "white" : "black"}
                  {...field}
                  required={true}
                />
                {errors.name && (
                  <div className="text-xs text-red-500 ">
                    {errors.name.message}
                  </div>
                )}
              </div>
            </div>
          )}
        />
        <Controller
          name="date"
          control={control}
          rules={{ required: "Debe seleccionar una fecha" }}
          render={({ field }) => (
            <div className="w-72 flex items-center mb-4">
              <div className="mr-2">
                <DateSVG
                  fillColor={isDarkMode === "dark" ? "#EEEEEE" : "#000"}
                />
              </div>
              <div className="flex-col w-72">
                <Input
                  label="Fecha"
                  type="date"
                  name="date"
                  color={isDarkMode === "dark" ? "white" : "black"}
                  {...field}
                  required={true}
                />
                {errors.date && (
                  <div className="text-xs text-red-500 ">
                    {errors.date.message}
                  </div>
                )}
              </div>
            </div>
          )}
        />

        <Controller
          name="categoryId"
          control={control}
          rules={{ required: "Debe seleccionar una categoría" }}
          render={({ field }) => (
            <div className="w-72 flex items-center mb-4">
              <div className="mr-2">
                <TagSVG
                  fillColor={isDarkMode === "dark" ? "#EEEEEE" : "#000"}
                />
              </div>
              <div className="flex-col w-72">
                <Select
                  label="Categoría"
                  name="categoryId"
                  color={isDarkMode === "dark" ? "light-blue" : "gray"}
                  {...field}
                  required={true}
                  value={
                    categories.find((category) => category.id === field.value)
                      ?.name
                  }
                  onChange={field.onChange}
                >
                  {categories &&
                    categories.map((category) => (
                      <Option key={category.id} value={category.id.toString()}>
                        {category.name}
                      </Option>
                    ))}
                </Select>
                {errors.categoryId && (
                  <div className="text-xs text-red-500 ">
                    {errors.categoryId.message}
                  </div>
                )}
              </div>
            </div>
          )}
        />

        <Controller
          name="frequency"
          control={control}
          rules={{ required: "Debe seleccionar una frecuencia" }}
          render={({ field }) => (
            <div className="w-72 flex items-center mb-4">
              <div className="mr-2">
                <RepeatSVG
                  fillColor={isDarkMode === "dark" ? "#EEEEEE" : "#000"}
                />
              </div>
              <div className="flex-col w-72">
                <Select
                  label="Frecuencia*"
                  type="select"
                  name="frequency"
                  color={isDarkMode === "dark" ? "light-blue" : "gray"}
                  {...field}
                  required={true}
                >
                  <Option value="1">Único</Option>
                  <Option value="2">2 veces</Option>
                  <Option value="3">3 veces</Option>
                  <Option value="4">4 veces</Option>
                </Select>
                {errors.frequency && (
                  <div className="text-xs text-red-500 ">
                    {errors.frequency.message}
                  </div>
                )}
              </div>
            </div>
          )}
        />

        <div className="flex flex-col sm:flex-row sm:gap-3">
          <Button onClick={() => handleSetSection("dashboard")}>
            Cancelar
          </Button>
          <Button
            color={isDarkMode === "dark" ? "yellow" : "blue"}
            type="submit"
          >
            Registrar Gasto
          </Button>
        </div>
        <label className="text-xs text-red-500 m-2">
          Los campos marcados con * son obligatorios
        </label>
      </form>
    </section>
  );
};

export default GastosForm;
