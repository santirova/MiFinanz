"use client";
import { useEffect, useRef, useState } from "react";
import { getAllBill, getAllCategoryBill } from "@/redux/features/billSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Table2 from "../home/billsAndEarnings/Table2";

const Bill = () => {
  const dispatch = useAppDispatch();
  const tableMode = "bill";

  const userId = useAppSelector((state) => state.userInfo?.user.id) || null;
  const billsCategories = useAppSelector((state) => state.bill?.category) || [];
  const billsData = useAppSelector((state) => state.bill?.bill)?.Bills || [];
  console.log(billsData);
  const [crudChanges, setCrudChanges] = useState(false);

  const hasDispatchedCategoryBill = useRef(false);

  useEffect(() => {
    if (!hasDispatchedCategoryBill.current) {
      dispatch(getAllCategoryBill());
      hasDispatchedCategoryBill.current = true;
    }
  }, []);

  useEffect(() => {
    dispatch(getAllBill(userId));
  }, [billsData.length, userId, crudChanges]);

  const handleCrudChanges = () => {
    setCrudChanges(!crudChanges);
  };

  return (
    <section>
      <Table2
        mode={tableMode}
        data={billsData}
        categories={billsCategories}
        handleCrudChanges={handleCrudChanges}
      />
    </section>
  );
};

export default Bill;
