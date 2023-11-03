import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getAllEarning,
  getAllCategoryEarning,
} from "@/redux/features/earningSlice";

import Table2 from "../home/billsAndEarnings/Table2";

const Earning = () => {
  const dispatch = useAppDispatch();
  const tableMode = "earning";

  const userId = useAppSelector((state) => state.userInfo?.user.id) || null;
  const earningCategories =
    useAppSelector((state) => state.earning?.category) || [];
  const earningData = useAppSelector((state) => state.earning?.earning) || [];
  const [crudChanges, setCrudChanges] = useState(false);

  const hasDispatchedCategoryEarning = useRef(false);

  useEffect(() => {
    if (!hasDispatchedCategoryEarning.current) {
      dispatch(getAllCategoryEarning());
      hasDispatchedCategoryEarning.current = true;
    }
  }, []);

  useEffect(() => {
    console.log("PRUEBA RENDER", crudChanges);

    dispatch(getAllEarning(userId));
  }, [earningData.length, userId, crudChanges]);

  const handleCrudChanges = () => {
    setCrudChanges(!crudChanges);
  };

  return (
    <section className="h-full w-full px-3">
      <Table2
        mode={tableMode}
        data={earningData}
        categories={earningCategories}
        handleCrudChanges={handleCrudChanges}
      />
    </section>
  );
};

export default Earning;
