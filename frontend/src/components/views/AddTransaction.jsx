"use client";
import { Button, Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TagSVG from "@/assets/shared/Tags.jsx";
import NameSVG from "@/assets/shared/Description.jsx";
import DateSVG from "@/assets/shared/Date.jsx";
import CashSVG from "@/assets/shared/Cash.jsx";
import RepeatSVG from "@/assets/shared/Repeat.jsx";
import { useAppSelector } from "@/redux/hooks";
import { useForm, Controller } from "react-hook-form";
import { Alert } from "@material-tailwind/react";
import { addBill } from "@/redux/features/bill.Slice";
import { useDispatch } from "react-redux";
import IconSuccess from "@/assets/shared/IconAlertSuccess";
import IconError from "@/assets/shared/IconAlertError";

const AddTransaction = () => {
  const [selectedButton, setSelectedButton] = useState("GASTOS");
  const [activeButton, setActiveButton] = useState("Efectivo");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const dispatch = useDispatch();
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
    },
  });

  const handleButtonClick = (button) => {
    //Para seleccionar Gastos o ingreso
    setSelectedButton(button);
  };

  const handleButtonSelect = (button) => {
    //Para seleccionar Efectivo, Cuenta C o VISA
    setActiveButton(button);
  };

  const handleRenderForm = () => {
    return renderForm();
  };

  const { user: { id } = {} } = useAppSelector((store) => store.userInfo) || {};

  const handleClickGasto = async (data, activeButton) => {
    const payment_method = activeButton === "Efectivo" ? false : 1;
    const amount = parseFloat(data.amount);
    const frequency = parseInt(data.frequency);
    const categoryId = parseFloat(data.categoryId);

    const dataInput = {
      ...data,
      amount,
      payment_method,
      categoryId,
      frequency,
    };
    try {
      await dispatch(addBill(id, dataInput));
      reset({
        amount: "",
        name: "",
        date: "",
        categoryId: "",
        frequency: "",
      });
      setShowSuccessAlert(true);
      //console.log("datos:", id, dataInput);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 5000);
    } catch (error) {
      setShowErrorAlert(true);
      console.log(error);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 5000);
    }
  };

  const handleClickIngreso = () => {
    console.log("guardando ingreso");
  };

  const renderForm = () => (
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
            activeButton === "VISA" && "bg-mLightGray"
          }`}
          onClick={() => handleButtonSelect("VISA")}
        >
          TARJETA
        </button>
      </div>
      <Controller
        name="amount"
        control={control}
        rules={{ required: "Debe ingresar el Total del gasto" }}
        render={({ field }) => (
          <div className="w-72 flex items-center mb-4">
            <div className="mr-2">
              <CashSVG fillColor={isDarkMode === "dark" ? "#EEEEEE" : "#000"} />
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
              <NameSVG fillColor={isDarkMode === "dark" ? "#EEEEEE" : "#000"} />
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
              <DateSVG fillColor={isDarkMode === "dark" ? "#EEEEEE" : "#000"} />
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
              <TagSVG fillColor={isDarkMode === "dark" ? "#EEEEEE" : "#000"} />
            </div>
            <div className="flex-col w-72">
              <Input
                label="Categoría"
                type="text"
                name="categoryId"
                color={isDarkMode === "dark" ? "white" : "black"}
                {...field}
                required={true}
              />
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
                <Option value="" disabled>
                  Selecciona una frecuencia
                </Option>
                <Option value="1">Único</Option>
                <Option value="2">2 veces</Option>
                <Option value="3">3 veces</Option>
                <Option value="4">4 veces</Option>
              </Select>
            </div>
          </div>
        )}
      />

      <div className="flex flex-col sm:flex-row sm:gap-3">
        <Button>Cancelar</Button>
        <Button
          onClick={handleSubmit((data) =>
            selectedButton === "GASTOS"
              ? handleClickGasto(data, activeButton)
              : handleClickIngreso(data)
          )}
          color={isDarkMode === "dark" ? "yellow" : "blue"}
        >
          Registrar {selectedButton === "GASTOS" ? "Gasto" : "Ingreso"}
        </Button>
      </div>
      <label className="text-xs text-red-500 m-2">
        Los campos marcados con * son obligatorios
      </label>
    </section>
  );

  return (
    <section className="w-full h-full flex justify-center items-center flex-col">
      {showSuccessAlert && (
        <Alert
          icon={<IconSuccess />}
          className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
        >
          !Gasto registrado correctamente!
        </Alert>
      )}
      {showErrorAlert && (
        <Alert
          icon={<IconError />}
          className="rounded-none border-l-4  border-red-500 bg-red-100 font-medium text-red-600"
        >
          Error vuelve a intentarlo
        </Alert>
      )}
      <div className="w-56 text-center mt-10 sm:mt-10">
        <div className="flex gap-2">
          <button
            className={`w-full border rounded p-1 border-mBlack dark:border-mmWhite text-mBlack dark:text-mWhite ${
              selectedButton === "GASTOS"
                ? "bg-blue-500"
                : "bg-mWhite dark:bg-[#44444C]"
            }`}
            onClick={() => handleButtonClick("GASTOS")}
          >
            GASTOS
          </button>
          <button
            className={`w-full border rounded p-1 border-mBlack dark:border-mWhite text-mBlack dark:text-mWhite ${
              selectedButton === "INGRESOS"
                ? "bg-blue-500"
                : "bg-mWhite dark:bg-[#44444C]"
            }`}
            onClick={() => handleButtonClick("INGRESOS")}
          >
            INGRESOS
          </button>
        </div>
      </div>
      {selectedButton === "GASTOS" && handleRenderForm()}
      {selectedButton === "INGRESOS" && handleRenderForm()}
    </section>
  );
};

export default AddTransaction;
