import {  useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import * as echarts from "echarts";

const BillsPieChart = () => {

  const { billsPieChart } = useAppSelector((state) => state.dashboard);
  const {darkMode} = useAppSelector((state)=> state.theme)

  useEffect(() => {
    const chartContainer = document.getElementById("chart-container");

    if (chartContainer) {
      const chart = echarts.init(chartContainer);

      // Verifica que billsPieChart tenga datos antes de usarlo en el gráfico
      if (billsPieChart) {
        const option = {
          title: {
            text: 'Gastos por categoria mensuales',
            padding: [10, 10,10,10],
            textStyle:{
              fontFamily:'sans-serif',
              fonstStyle:'lighter',
              fontWeight: 'normal',
              color:  darkMode === 'dark' ? '#EEEEEE': '#0B0909' ,
            },
          },
          tooltip:{
            show:true
          },
          legend: {
            top: '5%',
            left: 'left',
            padding:[15,10,10,10],
            textStyle :{
              fontSize: 12,
              color:'#8C8C8C',
              fontWeight: "normal",
              padding: [5, 3],
              borderRadius: 4,
            }
          },
          label: {
            formatter: function (params) {
              return `{a|${params.name}}`;
            },
            rich: {
              a: {
                color: '#8C8C8C',
                fontSize: 12,
                fontWeight: "normal",
                padding: [5, 10],
                borderRadius: 4,
              },
            },
      },
          backgroundColor: darkMode === 'dark' ? '#0B0909' : '#EEEEEE',
          series: [
            {
              name: "'Access From'",
              type: "pie",
              radius: [50, 100],
              center: ["50%", "60%"],
              itemStyle: {
                borderRadius: 2,
              },
              data: billsPieChart,
            },
          ],
        };
        chart.setOption(option);
      }
    }
  }, [billsPieChart,darkMode]); 

  return (
    <div className="h-400px border item-center border-mLightGray">
      {Array.isArray(billsPieChart) && billsPieChart.length > 0 ? (
        <div id="chart-container" style={{ width: "100%", height: "408px" }}></div>
      ) : (
        <div className="w-full h-400px bg-mWhite dark:bg-mBlack flex flex-col items-start justify-center">
          <h1 className="text-base text-mBlack dark:text-mWhite p-2">Gastos por categoria mensuales</h1>
          <div className="h-full w-full flex items-center justify-center">
            <p className="text-mLightGray p-2">No hay registros para el mes actual</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillsPieChart;
