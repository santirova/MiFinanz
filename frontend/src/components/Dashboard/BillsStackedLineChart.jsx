'use client'
// import { setBillsPieChartsAction } from "@/redux/features/dashboardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import * as echarts from "echarts";
import { setStackedLineChartAction } from "@/redux/features/dashboardSlice";


const BillsStackedLineChart = () => {
    const { stackedLineChart } = useAppSelector((state) => state.dashboard);
    const {user} = useAppSelector((state)=> state.userInfo)
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!stackedLineChart) {
          dispatch(setStackedLineChartAction(user?.id));
        }
      }, []);
    useEffect(()=>{
        const chartContainer = document.getElementById("stacked-line");
        const legendData = stackedLineChart?.series.map(e=> e.name)
        if (chartContainer) {
            const chart = echarts.init(chartContainer, "dark")
        const option = {
          backgroundColor:'mBlack',
            title: {
              text: 'Gastos por metodos de pago ultimos 15 dias',
              textStyle:{
                fontFamily:'sans-serif',
                fonstStyle:'normal',
                fontWeight: 'normal',
              },
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              right:'auto',
              data: legendData
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: stackedLineChart?.data
            },
            yAxis: {
              type: 'value'
            },
            series: stackedLineChart?.series
          }
          chart.setOption(option);
        }
    },[dispatch,stackedLineChart])
  return (
    <div>
        <div
          id="stacked-line"
          style={{ width: "100%", height: "500px" }}
        ></div>
    </div>
  )
}

export default BillsStackedLineChart