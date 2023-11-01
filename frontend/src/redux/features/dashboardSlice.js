import { createSlice } from "@reduxjs/toolkit";
import { axiosMiFinanz } from "@/utils/configAxios";

export const dashboardSlice = createSlice({

    name: 'dashboard',
    initialState: { 
      billsPieChart:null,
      earningVsBill:null,
      stackedLineChart:null,
    },
  
    reducers: {
        setBillsPieCharts: (state,action) => {
            state.billsPieChart = action.payload;
        },
        setEarningVsBill: (state,action) => {
          state.earningVsBill= action.payload;
      },
        setStackedLineChart: (state, action) => {
      state.stackedLineChart = action.payload;
    },
  },
});

const { setBillsPieCharts , setEarningVsBill, setStackedLineChart } = dashboardSlice.actions;


export const setBillsPieChartsAction = (userid, month) => (dispatch) => {
  return axiosMiFinanz
    .post(`/stats/billscategory/${userid}?month=${month}`)
    .then((res) => {
      if (Array.isArray(res.data)) {
        // Hay registros, procesa los datos
        const cleanData = res.data.map((e) => {
          return {
            name: e.category_name,
            value: e.ingresos_totales,
          };
        });
        dispatch(setBillsPieCharts(cleanData));
      } else {
        // No hay registros, devolver un objeto vacío o un mensaje informativo
        dispatch(setBillsPieCharts([]));
      }
    });
};




export const setEarningVsBillAction = (userid,month) => (dispatch) => {
  return new Promise((resolve, reject) => {
    // Devuelve una promesa para poder capturar el error en el componente
    axiosMiFinanz
      .post(`/stats/earningVsBill/${userid}?month=${month}`)
      .then((res) => {
          console.log("Respuesta del servidor:", res.data);
        const {sumearnings, sumbill, neto }= res.data
    

      dispatch(setEarningVsBill({sumearnings, sumbill, neto }));

        //resolve();
      })
      .catch((err) => {
        reject(new Error(err)); 
      });
  })
}


export const setStackedLineChartAction = (userid) => (dispatch) => {
  return new Promise((resolve, reject) => {
    // Devuelve una promesa para poder capturar el error en el componente
    axiosMiFinanz
      .get(`/stats/billsDayxCard/${userid}`)
      .then((res) => {
        dispatch(setStackedLineChart(res.data));
      })
      .catch((err) => {
        console.log(err);
        reject(new Error(err));
      });
  });
};
export default dashboardSlice.reducer;

