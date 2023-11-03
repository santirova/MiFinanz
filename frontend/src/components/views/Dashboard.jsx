import BillsPieChart from "../Dashboard/BillsPieChart";
import EarningVsBill from "../Dashboard/EarningVsBill";
import BillsStackedLineChart from "../Dashboard/BillsStackedLineChart";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  setBillsPieChartsAction,
  setEarningVsBillAction,
  setStackedLineChartAction,
} from "@/redux/features/dashboardSlice";
import { useEffect, useState } from "react";
import ProtectedLoader from "../ProtectedRoute/ProtectedLoader";

const Dashboard = () => {
  const bills = useAppSelector((state) => state.bill?.bill) || [];
  const earnings = useAppSelector((state) => state.earning?.earning) || [];
  const { billsPieChart, earningVsBill, stackedLineChart } = useAppSelector(
    (state) => state.dashboard
  );
  const { user } = useAppSelector((state) => state.userInfo);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const fechaActual = new Date();
  const month = fechaActual.getMonth() + 1;

  useEffect(() => {
    dispatch(setBillsPieChartsAction(user?.id, month));

    dispatch(setStackedLineChartAction(user?.id));

    dispatch(setEarningVsBillAction(user.id, month));
  }, [bills, earnings]);

  useEffect(() => {
    if (billsPieChart && earningVsBill && stackedLineChart) {
      setLoading(false);
    }
  }, [billsPieChart, earningVsBill, stackedLineChart]);

  if (loading) {
    return (
      <div>
        <ProtectedLoader />
      </div>
    );
  }
  return (
    <div className="h-full w-full  px-4  ">
      <div className="flex flex-col md:flex-row gap-4 pb-4">
        <div className="w-1/2 ">
          <BillsPieChart />
        </div>
        <div className="w-1/2 ">
          <EarningVsBill />
        </div>
      </div>
      <BillsStackedLineChart />
    </div>
  );
};

export default Dashboard;
