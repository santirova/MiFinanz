import { useEffect, useRef } from "react";
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

  const hasDispatchedCategoryEarning = useRef(false);

  useEffect(() => {
    if (!hasDispatchedCategoryEarning.current) {
      dispatch(getAllCategoryEarning());
      hasDispatchedCategoryEarning.current = true;
    }
  }, []);

  useEffect(() => {
    dispatch(getAllEarning(userId));
  }, [earningData.length, userId]);

  return (
    <section>
      <Table2
        mode={tableMode}
        data={earningData}
        categories={earningCategories}
      />
    </section>
  );
};

export default Earning;
