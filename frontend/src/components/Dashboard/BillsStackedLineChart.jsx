'use client'
// import { setBillsPieChartsAction } from "@/redux/features/dashboardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import * as echarts from "echarts";
import { setStackedLineChartAction } from "@/redux/features/dashboardSlice";


const BillsStackedLineChart = () => {
    const { stackedLineChart } = useAppSelector((state) => state.dashboard);
    const userId = 'a4c20b8a-ad31-4d26-9160-436c7c618b5e'
    const dispatch = useAppDispatch();
    useEffect(() => {
        // Carga los datos una vez que se monta el componente
        if (!stackedLineChart) {
          dispatch(setStackedLineChartAction(userId));
        }
      }, []);
    useEffect(()=>{
        const chartContainer = document.getElementById("stacked-line");
        const legendData = stackedLineChart?.series.map(e=> e.name)
        if (chartContainer) {
            const chart = echarts.init(chartContainer, "dark")
        const option = {
            title: {
              text: 'Stacked Line'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: legendData
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
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