import { setBillsPieChartsAction } from "@/redux/features/dashboardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import * as echarts from "echarts";

const BillsPieChart = () => {

  const { billsPieChart } = useAppSelector((state) => state.dashboard);
  const {user} = useAppSelector((state)=> state.userInfo)
  const {darkMode} = useAppSelector((state)=> state.theme)
   const fechaActual = new Date();
   const month = fechaActual.getMonth() + 1;
  //  const month = 10;
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
      const chart = echarts.init(chartContainer,"dark");

      // Verifica que billsPieChart tenga datos antes de usarlo en el gráfico
      if (billsPieChart) {
        const option = {
          title: {
            text: 'Gastos por categoria mensuales',
            textStyle:{
              fontFamily:'sans-serif',
              fonstStyle:'normal',
              fontWeight: 'normal',
              textColor:'#EEEEEE',
            },
          },
          tooltip:{
            show:true
          },
          label: {
            formatter: function (params) {
              return `{a|${params.name}}`;
            },
            rich: {
              a: {
                color: "#EEEEEE",
                fontSize: 12,
                fontWeight: "normal",
                padding: [5, 10],
                borderRadius: 4,
              },
            },
      },
          backgroundColor: darkMode === 'dark' ? 'mBalck' : 'mWhite',
          series: [
            {
              name: "Nightingale Chart",
              type: "pie",
              radius: [35, 130],
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
  }, [dispatch,billsPieChart,darkMode]); 

  return (
    <div className="h-400px bg-blue-gray-700">
      {Array.isArray(billsPieChart) && billsPieChart.length > 0 ? (
        <div id="chart-container" style={{ width: "100%", height: "400px" }}></div>
      ) : (
        <div className="w-full h-400px bg-black flex flex-col justify-center items-start">
          <h1 className="text-base text-mWhite">Gastos por categoria mensuales</h1>
          <p className="text-mWhite">No hay registros para el mes actual</p>
        </div>
      )}
    </div>
  );
};

export default BillsPieChart;
