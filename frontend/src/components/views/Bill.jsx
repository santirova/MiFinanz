import { useEffect, useRef } from "react";
import { getAllBill, getAllCategoryBill } from "@/redux/features/billSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Table2 from "../home/billsAndEarnings/Table2";

const Bill = () => {
  const dispatch = useAppDispatch();
  const tableMode = "bill";

  const userId = useAppSelector((state) => state.userInfo?.user.id) || null;
  const billsCategories = useAppSelector((state) => state.bill?.category) || [];
  const billsData = useAppSelector((state) => state.bill?.bill)?.Bills || [];

  const hasDispatchedCategoryBill = useRef(false);

  useEffect(() => {
    if (!hasDispatchedCategoryBill.current) {
      dispatch(getAllCategoryBill());
      hasDispatchedCategoryBill.current = true;
    }
  }, []);

  useEffect(() => {
    dispatch(getAllBill(userId));
  }, [billsData.length, userId]);

  return (
    <section>
      <Table2 mode={tableMode} data={billsData} categories={billsCategories} />
    </section>
  );
};

export default Bill;
