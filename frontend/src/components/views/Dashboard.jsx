import BillsPieChart from "../Dashboard/BillsPieChart"
import EarningVsBill from "../Dashboard/EarningVsBill"
import BillsStackedLineChart from "../Dashboard/BillsStackedLineChart"


const Dashboard = () => {
  return (
    <div>
        <BillsPieChart/>
        <EarningVsBill/>
        <BillsStackedLineChart/>

    </div>
  )
}

export default Dashboard