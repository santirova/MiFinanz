import { useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  getAllCardsAction,
  addCardAction,
  deleteCardAction,
} from "@/redux/features/creditCardSlice";

const Modal = ({ isOpen, handleOpenModal, selectedCard }) => {
  const dispatch = useAppDispatch();

  const [taskContent, setTaskContent] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Establecer el foco en el input cuando el modal se abre
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleDeleteCard = async (id) => {
    await dispatch(deleteCardAction(id));
    console.log("Eliminando tarjeta");
  };

  const handleSaveTask = () => {
    if (taskContent.trim() === "") {
      // Verifica que el contenido de la tarea no esté vacío
      alert("Por favor, ingresa el contenido de la tarea.");
      return;
    }

    if (selectedCard) {
      // Si es una tarea existente, realiza la edición
      editTask(selectedCard.id, taskContent);
    } else {
      // Si no es una tarea existente, realiza la adición
      addTask(section, taskContent);
    }
    setTaskContent(""); // Limpia el contenido de la tarea
    handleOpenModal(); // Cierra el modal después de agregar o editar la tarea
  };

  const handleDeleteTask = () => {
    if (selectedCard) {
      // Si es una tarea existente, realiza la eliminación
      deleteTask(selectedCard.id);
      handleOpenModal();
    }
  };

  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg w-80 md:max-w-2xl">
          <h2 className="text-lg font-bold mb-4">
            {selectedCard ? "Editar Tarjeta" : "Añadir Tarjeta"}
          </h2>
          <div className="input-container">
            <input
              ref={inputRef}
              className="modal-input focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Type a task..."
              value={taskContent || (selectedCard && selectedCard.name) || ""}
              onChange={(e) => setTaskContent(e.target.value)}
            />
          </div>
          <div className="modal-btns-container flex gap-2 justify-center items-center">
            <button
              className="modal-btn bg-gray-200 hover:bg-gray-300"
              onClick={handleOpenModal}
            >
              Cancelar
            </button>
            {selectedCard && (
              <button
                className="modal-btn bg-red-500 hover:bg-red-600"
                onClick={handleDeleteTask}
              >
                Eliminar
              </button>
            )}
            <button
              className="modal-btn bg-green-500 hover:bg-green-600"
              onClick={handleSaveTask}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    )
  );
};
export default Modal;
