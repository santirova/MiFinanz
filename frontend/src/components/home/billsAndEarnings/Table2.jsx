"use client";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";

import TableHeader from "./TableHeader";
import CardFooterTable from "./CardFooterTable";
import { DialogDefault } from "./ModalEliminar";
import { ModalEdit } from "./ModalEdit";

import { filterTableData } from "@/utils/filter";
import { TABS, TABLE_HEAD, itemsPage } from "@/utils/constantsTables";

import { FaRegEdit } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const Table2 = ({ mode, data, categories, handleCrudChanges }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const [dataToEdit, setDataToEdit] = useState({});

  const [openEditModal, setOpenEditModal] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);
  const [deleteRecordId, setDeleteRecordId] = useState(null);
  const [deleteName, setDeleteName] = useState(null);

  const userId = useAppSelector((state) => state.userInfo?.user.id) || null;

  // console.log(categories);

  const handleOpenModal = (id, name) => {
    setOpenDialog(true); // Abre el diálogo
    setDeleteRecordId(id); // Guarda el ID del elemento a eliminar
    setDeleteName(name); // Guarda el nombre del elemento a eliminar
  };

  const handleEditClick = (billToEdit) => {
    setOpenEditModal(true);
    setDataToEdit(billToEdit);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(filteredTableData.length / itemsPage);
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleCategoryFilter = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  const filteredTableData = filterTableData(
    data,
    filter,
    searchTerm,
    selectedCategory
  );

  // Calcular el rango de elementos a mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPage;
  const endIndex = startIndex + itemsPage;

  const visibleItems = filteredTableData.slice(startIndex, endIndex);

  return (
    <Card className="h-full w-full dark:bg-mLightGray">
      <TableHeader
        mode={mode}
        filter={filter}
        handleFilterChange={handleFilterChange}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        selectedCategory={selectedCategory}
        handleCategoryFilter={handleCategoryFilter}
        TABS={TABS}
        categories={categories}
      />
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50  p-4 transition-colors hover-bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {/* {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )} */}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <DialogDefault
              open={openDialog}
              handler={() => setOpenDialog(false)} // Esto cierra el diálogo cuando se hace clic en "Cancelar" o "Confirmar"
              deleteRecordId={deleteRecordId}
              deleteName={deleteName}
              element={mode === "bill" ? "Gasto" : "Ingreso"}
              userId={userId}
            />
            <ModalEdit
              openEdit={openEditModal}
              handleOpenModal={() => setOpenEditModal(false)}
              userId={userId}
              dataToEdit={dataToEdit}
              mode={mode}
              categories={categories}
              handleCrudChanges={handleCrudChanges}
            />

            {visibleItems &&
              visibleItems.map(
                (
                  {
                    id,
                    CategoryBill,
                    name,
                    date,
                    amount,
                    frequency,
                    payment_method,
                    CardId,
                  },
                  index
                ) => {
                  const isLast = index === visibleItems.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {CategoryBill.name}
                          </Typography>
                        </div>
                      </td>

                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {frequency}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={payment_method ? "Tarjeta" : "Efectivo"}
                            color={payment_method ? "green" : "blue-gray"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Editar">
                          <IconButton
                            variant="text"
                            onClick={() =>
                              handleEditClick({
                                id,
                                CategoryBill,
                                name,
                                date,
                                amount,
                                frequency,
                                payment_method,
                                CardId,
                              })
                            }
                          >
                            <FaRegEdit className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Eliminar">
                          <IconButton
                            variant="text"
                            onClick={() => handleOpenModal(id, name)}
                          >
                            <AiOutlineClose className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>
      </CardBody>
      <CardFooterTable
        currentPage={currentPage}
        totalPages={Math.ceil(filteredTableData.length / itemsPage)}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </Card>
  );
};

export default Table2;
