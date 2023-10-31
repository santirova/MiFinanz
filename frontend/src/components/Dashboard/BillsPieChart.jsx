import { setBillsPieChartsAction } from "@/redux/features/dashboardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import * as echarts from 'echarts';

const BillsPieChart = () => {
  const { billsPieChart} = useAppSelector((state) => state.dashboard);
  const userId = '1c3d1e88-a663-480a-be6c-0d8f246e12d0';
  const month = 10;
  const dispatch = useAppDispatch();



  useEffect(() => {
    // Carga los datos una vez que se monta el componente
    if (!billsPieChart) {
      dispatch(setBillsPieChartsAction(userId, month));
    }
  }, [])

  useEffect(() => {
    const chartContainer = document.getElementById('chart-container');

    if (chartContainer) {
      const chart = echarts.init(chartContainer,'dark');

      // Verifica que billsPieChart tenga datos antes de usarlo en el gráfico
      if (billsPieChart) {
        const option = {
          legend: {
            top: 'bottom'
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: true },
            }
          },
          series: [
            {
              name: 'Nightingale Chart',
              type: 'pie',
              radius: [50, 150],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8
              },
              data: billsPieChart
            }
          ]
        };
        chart.setOption(option);
      }
    }
  }, [billsPieChart]); // Escucha cambios en billsPieChart

  return (
    <div>
      <p>bills pie chart</p>
      {billsPieChart && <div className="bg-white" id="chart-container" style={{ width: '100%', height: '400px' }}></div>}
    </div>
  );
};

export default BillsPieChart;
