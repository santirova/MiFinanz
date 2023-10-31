import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { deleteBill } from "@/redux/features/bill.Slice";
import { useAppDispatch } from "@/redux/hooks";

export function DialogDefault({
  open,
  deleteRecordId,
  deleteName,
  handler,
  element,
  userId,
}) {
  const handleOpen = () => handler(false);

  const dispatch = useAppDispatch();

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Eliminar {element}</DialogHeader>
        <DialogBody>
          ¿Estás seguro de que deseas eliminar el {element} :{" "}
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
              dispatch(deleteBill(deleteRecordId, userId));
              // console.log("Gasto eliminado:", deleteRecordId, deleteName);
              handler(false);
            }}
          >
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
