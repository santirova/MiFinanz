"use client";
import { Button, Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import TagSVG from "@/assets/shared/Tags.jsx";
import NameSVG from "@/assets/shared/Description.jsx";
import DateSVG from "@/assets/shared/Date.jsx";
import CashSVG from "@/assets/shared/Cash.jsx";
import { useForm, Controller } from "react-hook-form";
import { setSection } from "@/redux/features/activeSectionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { getAllCategoryEarning } from "@/redux/features/earningSlice";

const IngresosForm = ({ isDarkMode, handleSubmitForm }) => {
  const categories = useAppSelector((state) => state.earning.category);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategoryEarning());
  }, [dispatch]);

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
      CategoryEarningId: "",
    },
  });

  const submit = (data) => {
    handleSubmitForm(data);
    reset();
  };

  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };
  return (
    <section className="flex items-center justify-center flex-col m-5 ">
      <form onSubmit={handleSubmit(submit)}>
        <Controller
          name="amount"
          control={control}
          rules={{ required: "Debe ingresar el Total del ingreso" }}
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
          rules={{ required: "Debe ingresar el nombre del ingreso" }}
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
          name="CategoryEarningId"
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
                  name="CategoryEarningId"
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
                {errors.categoryEarningId && (
                  <div className="text-xs text-red-500 ">
                    {errors.CategoryEarningId.message}
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
            Registrar Ingreso
          </Button>
        </div>
        <label className="text-xs text-red-500 m-2">
          Los campos marcados con * son obligatorios
        </label>
      </form>
    </section>
  );
};

export default IngresosForm;
