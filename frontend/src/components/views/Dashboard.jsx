import BillsPieChart from "../Dashboard/BillsPieChart";
import EarningVsBill from "../Dashboard/EarningVsBill";
import BillsStackedLineChart from "../Dashboard/BillsStackedLineChart";
import { useAppSelector,useAppDispatch } from "@/redux/hooks";
import { setBillsPieChartsAction,setEarningVsBillAction,setStackedLineChartAction} from "@/redux/features/dashboardSlice";
import { useEffect, useState } from "react";
import ProtectedLoader from "../ProtectedRoute/ProtectedLoader";

const Dashboard = () => {

  const {billsPieChart,earningVsBill,stackedLineChart} = useAppSelector((state) => state.dashboard);
  const {user} = useAppSelector((state)=> state.userInfo);
  const dispatch = useAppDispatch();
  const [loading,setLoading] = useState(true);
  const fechaActual = new Date();
  const month = fechaActual.getMonth() + 1;

  useEffect(()=>{
    if (!billsPieChart) {
      dispatch(setBillsPieChartsAction(user?.id, month));
    }
    if (!stackedLineChart) {
      dispatch(setStackedLineChartAction(user?.id));
    }
    if (!earningVsBill) {
      dispatch(setEarningVsBillAction(user.id, month));   
    }


  },[billsPieChart,earningVsBill,stackedLineChart])


  useEffect(()=>{
    if (billsPieChart,earningVsBill,stackedLineChart) {
        setLoading(false)
    }
    console.log('en el use');
  },[billsPieChart,earningVsBill,stackedLineChart])

  if (loading) {
    return(
      <div>
        <ProtectedLoader/>
      </div>
    )
    
  }
  return (
    <div className="p-4 dark:bg-mDarkGray bg-mWhite"> {/* Agrega padding al contenedor */}
      <div className="flex gap-4 pb-4"> {/* Utiliza flexbox y gap para colocar los gráficos de torta lado a lado */}
        <div className="w-1/2 ">
          <BillsPieChart/>
        </div>
        <div className="w-1/2 ">
          <EarningVsBill/>
        </div>
      </div>
      <BillsStackedLineChart/>
    </div>
  );
};

export default Dashboard;
