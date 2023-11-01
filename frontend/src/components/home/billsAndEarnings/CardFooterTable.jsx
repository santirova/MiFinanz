import React from "react";
import { Button, Typography } from "@material-tailwind/react";

const CardFooter = ({
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
}) => {
  return (
    <div className="flex items-center justify-between border-t border-blue-gray-50 p-3">
      <Typography variant="small" color="blue-gray" className="font-normal">
        Página {currentPage} de {totalPages}
      </Typography>
      <div className="flex gap-2">
        <Button variant="outlined" size="sm" onClick={handlePreviousPage}>
          Anterior
        </Button>
        <Button variant="outlined" size="sm" onClick={handleNextPage}>
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default CardFooter;
