import BillsPieChart from "../Dashboard/BillsPieChart";
import EarningVsBill from "../Dashboard/EarningVsBill";
import BillsStackedLineChart from "../Dashboard/BillsStackedLineChart";

const Dashboard = () => {
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
