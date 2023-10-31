"use client";

import {
  Button,
  Dialog,
  Card,
  CardBody,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
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
import { updateBill } from "@/redux/features/bill.Slice";

export function ModalEdit({ openEdit, handler, userId, dataEdit, element }) {
  const handleOpen = () => handler(false);

  const {
    control,
    handleSubmit,
    setValue,
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

  const isDarkMode = useAppSelector((state) => state.theme.darkMode);

  const [activeButton, setActiveButton] = useState("Efectivo");
  const categories = useAppSelector((state) => state.bill.category);
  const cards = useAppSelector((state) => state.cards);

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

  useEffect(() => {
    if (dataEdit) {
      // Si dataEdit tiene datos (modo edición), actualiza los valores de los campos
      setValue("amount", dataEdit.amount);
      setValue("name", dataEdit.name);
      setValue("date", dataEdit.date);
      //setValue("categoryId", dataEdit.CategoryBillId);
      setValue(
        "frequency",
        dataEdit.frequency ? dataEdit.frequency.toString() : ""
      );
      setValue("cardId", dataEdit.cardId);
      const payment_method = dataEdit.payment_method;
      setActiveButton(payment_method === false ? "Efectivo" : "TARJETA");
    }
  }, [dataEdit]);

  const submit = (data) => {
    const payment_method = activeButton === "Efectivo" ? false : data.cardId; // si activeButton es Efectivo enviamos fase de lo contrario enviamos el id de la tarjeta seleccionada

    // Envía a la función handleSubmitForm el objeto data y payment_method
    const formData = {
      amount: parseFloat(data.amount),
      name: data.name,
      date: data.date,
      payment_method: typeof payment_method === "string" ? true : false,
      categoryId: parseFloat(data.categoryId),
      cardId: typeof payment_method === "string" ? data.cardId : null,
      frequency: parseInt(data.frequency),
    };

    dispatch(updateBill(dataEdit.id, formData, userId));
    console.log(formData, userId, dataEdit.id);
    handler(false);
  };

  return (
    <>
      <Dialog
        size="xs"
        open={openEdit}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Editar {element}
            </Typography>
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
                            fillColor={
                              isDarkMode === "dark" ? "#EEEEEE" : "#000"
                            }
                          />
                        </div>
                        <div className="flex-col w-72">
                          <Select
                            label="Tarjeta*"
                            name="cardId"
                            color={
                              isDarkMode === "dark" ? "light-blue" : "gray"
                            }
                            {...field}
                            required={true}
                            value={
                              cards.find((card) => card.id === field.value)
                                ?.name
                            }
                            onChange={field.onChange}
                          >
                            {cards &&
                              cards.map((card) => (
                                <Option
                                  key={card.id}
                                  value={card.id.toString()}
                                >
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
                            categories.find(
                              (category) => category.id === field.value
                            )?.name
                          }
                          onChange={field.onChange}
                        >
                          {categories &&
                            categories.map((category) => (
                              <Option
                                key={category.id}
                                value={category.id.toString()}
                              >
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
                          {Array.from({ length: 4 }).map((_, index) => (
                            <Option
                              key={index + 1}
                              value={(index + 1).toString()}
                            >
                              {`${index + 1} veces`}
                            </Option>
                          ))}
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
                  <Button onClick={handleOpen}>Cancelar</Button>
                  <Button
                    color={isDarkMode === "dark" ? "yellow" : "blue"}
                    type="submit"
                  >
                    Actualizar Gasto
                  </Button>
                </div>
              </form>
            </section>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
