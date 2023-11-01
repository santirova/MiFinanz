import { setEarningVsBillAction } from "@/redux/features/dashboardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import * as echarts from 'echarts';

const EarningVsBill = () => {
  const {earningVsBill } = useAppSelector((state) => state.dashboard);
  const {user} = useAppSelector((state)=> state.userInfo);
  const fechaActual = new Date();
  const month = fechaActual.getMonth() + 1;
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (!earningVsBill) {
      dispatch(setEarningVsBillAction(user.id, month));   
    }
  }, [dispatch, earningVsBill]);

  useEffect(() => {
   
    const chartCont = document.getElementById('chart2-container');
    if (chartCont) {
      const chart = echarts.init(chartCont, 'dark');
      if (earningVsBill) {
        var option;
        option = {
          grid: {
            width:'auto'
          },
          backgroundColor:'mBlack',
          tooltip:{
            show:true
          },
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
    <div className="items-center">
    {earningVsBill && <div id="chart2-container" style={{ width: '100%', height: '500px' }}></div>}
  </div>
  )
};

export default EarningVsBill ;
