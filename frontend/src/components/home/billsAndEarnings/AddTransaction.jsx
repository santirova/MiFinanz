"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/redux/hooks";
import { Alert } from "@material-tailwind/react";
import { addBill } from "@/redux/features/billSlice";
import { addEarning } from "@/redux/features/earningSlice";
import { useDispatch } from "react-redux";
import IconSuccess from "@/assets/shared/IconAlertSuccess";
import IconError from "@/assets/shared/IconAlertError";
import GastosForm from "./GastosForm";
import IngresosForm from "./IngresosForm";

const AddTransaction = () => {
  const [selectedButton, setSelectedButton] = useState("GASTOS");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleRenderForm = () => {
    if (selectedButton === "GASTOS") {
      return (
        <GastosForm
          isDarkMode={isDarkMode}
          handleSubmitForm={handleSubmitForm}
        />
      );
    } else {
      return (
        <IngresosForm
          isDarkMode={isDarkMode}
          handleSubmitForm={handleSubmitForm}
        />
      );
    }
  };

  const dispatch = useDispatch();

  const handleButtonClick = (button) => {
    //Para seleccionar Gastos o ingreso
    setSelectedButton(button);
  };

  const { user: { id } = {} } = useAppSelector((store) => store.userInfo) || {};

  const handleSubmitForm = async (data, payment_method) => {
    // Lógica que maneja los datos según el tipo seleccionado (GASTOS o INGRESOS)
    if (selectedButton === "GASTOS") {
      // Maneja datos para GASTOS
      const dataInput = {
        amount: parseFloat(data.amount),
        name: data.name,
        date: data.date,
        payment_method: typeof data.payment_method === "string" ? true : false,
        categoryId: parseFloat(data.categoryId),
        cardId: typeof data.payment_method === "string" ? data.cardId : null,
        frequency: parseInt(data.frequency),
      };

      try {
        await dispatch(addBill(id, dataInput));

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
    } else {
      // Maneja datos para INGRESOS

      const dataInput = {
        amount: parseFloat(data.amount),
        name: data.name,
        date: data.date,
        CategoryEarningId: parseInt(data.CategoryEarningId),
      };
      console.log("dataInput", dataInput);
      try {
        await dispatch(addEarning(id, dataInput));
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
    }
  };

  return (
    <section className="w-full h-full flex justify-center items-center flex-col">
      {showSuccessAlert && (
        <Alert
          icon={<IconSuccess />}
          className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
        >
          {selectedButton === "GASTOS"
            ? "!Gasto registrado correctamente!"
            : "!Ingreso registrado correctamente!"}
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

      {handleRenderForm()}
    </section>
  );
};

export default AddTransaction;
