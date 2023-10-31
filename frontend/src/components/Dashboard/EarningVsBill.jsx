//import { setBillsPieChartsAction } from "@/redux/features/dashboardSlice";
import { setEarningVsBillAction } from "@/redux/features/dashboardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import * as echarts from 'echarts';

const EarningVsBill = () => {
  const {earningVsBill } = useAppSelector((state) => state.dashboard);
  const userId = '1c3d1e88-a663-480a-be6c-0d8f246e12d0';
  const month = 10;
  const dispatch = useAppDispatch();


  useEffect(() => {
    // Carga los datos una vez que se monta el componente
    if (!earningVsBill) {
      dispatch(setEarningVsBillAction(userId, month));   
      
    }
  }, [dispatch, earningVsBill]);

  useEffect(() => {
   
    const chartCont = document.getElementById('chart2-container');
    if (chartCont) {
        const chart = echarts.init(chartCont, 'dark');
        if (earningVsBill) {
            var option;

option = {
  xAxis: {
    type: 'category',
    data: ['Ingresos', 'Gastos' ]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
    
      data: [
      earningVsBill?.sumearnings ,
  
        {
          value:earningVsBill?.sumbill,
          itemStyle: {
            color: '#a90000'
          }
        
        },   
      ],
      type: 'bar'
    }
  ]
};
chart.setOption(option)

        }
   
    }
  }, [earningVsBill])
  return(
    <div>
    <p>Earning Vs Bill</p>
    {earningVsBill && <div className="bg-white" id="chart2-container" style={{ width: '100%', height: '400px' }}></div>}
  </div>
  )
};

export default EarningVsBill ;
