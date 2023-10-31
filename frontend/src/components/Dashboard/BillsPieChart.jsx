import { setBillsPieChartsAction } from "@/redux/features/dashboardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import * as echarts from "echarts";

const BillsPieChart = () => {

  const { billsPieChart } = useAppSelector((state) => state.dashboard);
  const {user} = useAppSelector((state)=> state.userInfo)
  const fechaActual = new Date();
  const month = fechaActual.getMonth() + 1;
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Carga los datos una vez que se monta el componente
    if (!billsPieChart) {
      dispatch(setBillsPieChartsAction(user?.id, month));
    }
  }, [])

  useEffect(() => {
    const chartContainer = document.getElementById("chart-container");

    if (chartContainer) {
      const chart = echarts.init(chartContainer, "dark");

      // Verifica que billsPieChart tenga datos antes de usarlo en el gráfico
      if (billsPieChart) {
        const option = {
          backgroundColor:'mBlack',
          legend: {
            top: "bottom",
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: true },
            },
          },
          series: [
            {
              name: "Nightingale Chart",
              type: "pie",
              radius: [50, 150],
              center: ["50%", "50%"],
              roseType: "area",
              itemStyle: {
                borderRadius: 8,
              },
              data: billsPieChart,
            },
          ],
        };
        chart.setOption(option);
      }
    }
  }, [dispatch,billsPieChart]); 

  return (
    <div>
      <p>bills pie chart</p>

     {billsPieChart && (
        <div
          id="chart-container"
          style={{ width: "100%", height: "500px" }}
        ></div>
      )}

    </div>
  );
};

export default BillsPieChart;
