import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import * as echarts from "echarts";

const EarningVsBill = () => {
  const { earningVsBill } = useAppSelector((state) => state.dashboard);
  const { darkMode } = useAppSelector((state) => state.theme);

  useEffect(() => {
    const chartCont = document.getElementById("chart2-container");
    if (chartCont) {
      const chart = echarts.init(chartCont);
      if (earningVsBill) {
        var option;
        option = {
          title: {
            text: "Gastos vs Ingresos mensuales",
            padding: [10, 10, 10, 10],
            textStyle: {
              fontFamily: "sans-serif",
              fonstStyle: "normal",
              fontWeight: "normal",
              color: darkMode === "dark" ? "#fff" : "#0B0909",
            },
          },
          grid: {
            left: "15%",
          },
          backgroundColor: darkMode === "dark" ? "#0B0909" : "#fff",
          tooltip: {
            show: true,
          },
          xAxis: {
            type: "category",
            data: [
              {
                value: "Ingresos",
                textStyle: {
                  color: "#8C8C8C",
                },
              },
              {
                value: "Gastos",
                textStyle: {
                  color: "#8C8C8C",
                },
              },
            ],
          },
          yAxis: {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#8C8C8C",
              },
            },
          },
          series: [
            {
              data: [
                earningVsBill?.sumearnings,

                {
                  value: earningVsBill?.sumbill,
                  itemStyle: {
                    color: "#a90000",
                  },
                },
              ],
              type: "bar",
            },
          ],
        };
        chart.setOption(option);
      }
    }
  }, [earningVsBill, darkMode]);

  return (
    <>
      {earningVsBill && (
        <div
          id="chart2-container"
          className="items-center border border-mLightGray w-full h-72 rounded-md shadow-md"
        ></div>
      )}
    </>
  );
};

export default EarningVsBill;
