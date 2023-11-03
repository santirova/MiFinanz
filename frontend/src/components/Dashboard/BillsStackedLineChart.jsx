"use client";

import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import * as echarts from "echarts";

const BillsStackedLineChart = () => {
  const { stackedLineChart } = useAppSelector((state) => state.dashboard);
  const { darkMode } = useAppSelector((state) => state.theme);

  useEffect(() => {
    const chartContainer = document.getElementById("stacked-line");
    const legendData = stackedLineChart?.series.map((e) => e.name);
    const xAxis = stackedLineChart?.data.map((e) => {
      return {
        value: e,
        textStyle: {
          color: "#8C8C8C",
        },
      };
    });
    if (chartContainer) {
      const chart = echarts.init(chartContainer, "dark");
      const option = {
        backgroundColor: darkMode === "dark" ? "#0B0909" : "#fff",
        title: {
          text: "Gastos por metodos de pago ultimos 15 dias",
          padding: [10, 10],
          textStyle: {
            fontFamily: "sans-serif",
            fonstStyle: "normal",
            fontWeight: "normal",
            color: darkMode === "dark" ? "#fff" : "#0B0909",
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          left: "right",
          data: legendData,
          textStyle: {
            fontSize: 12,
            color: "#8C8C8C",
            fontWeight: "normal",
            padding: [5, 3],
            borderRadius: 4,
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: xAxis,
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#8C8C8C",
          },
        },
        series: stackedLineChart?.series,
      };
      chart.setOption(option);
    }
  }, [stackedLineChart, darkMode]);

  return (
    <div
      id="stacked-line"
      className="h-72 w-full border border-mLightGray rounded-md shadow-md"
    ></div>
  );
};

export default BillsStackedLineChart;
