import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { deleteBill } from "@/redux/features/billSlice";
import { deleteEarning } from "@/redux/features/earningSlice";
import { useAppDispatch } from "@/redux/hooks";
import { BsModem } from "react-icons/bs";

export function DialogDefault({
  open,
  deleteRecordId,
  deleteName,
  handler,
  mode,
  userId,
  handleCrudChanges,
}) {
  const handleOpen = () => handler(false);

  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    if (mode === "bill") {
      await dispatch(deleteBill(deleteRecordId, userId));
    } else {
      await dispatch(deleteEarning(deleteRecordId, userId));
    }
    handler(false);
    handleCrudChanges();
  };

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Eliminar {mode}</DialogHeader>
        <DialogBody>
          ¿Estás seguro de que deseas eliminar el {mode} :{" "}
          <span className="text-blue-500">{deleteName} ?</span>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handler(false)}
            className="mr-1"
          >
            <span>Cancelar</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              handleDelete();
            }}
          >
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
