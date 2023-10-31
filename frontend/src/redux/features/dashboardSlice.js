import { createSlice } from "@reduxjs/toolkit";
import { axiosMiFinanz } from "@/utils/configAxios";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    billsPieChart: null,
    stackedLineChart:null,
  },
  reducers: {
    setBillsPieCharts: (state, action) => {
      state.billsPieChart = action.payload;
    },
    setStackedLineChart: (state, action) => {
      state.stackedLineChart = action.payload;
    },
  },
});
const { setBillsPieCharts,setStackedLineChart } = dashboardSlice.actions;

export const setBillsPieChartsAction = (userid, month) => (dispatch) => {
  return new Promise((resolve, reject) => {
    // Devuelve una promesa para poder capturar el error en el componente
    axiosMiFinanz
      .post(`/stats/billscategory/${userid}?month=${month}`)
      .then((res) => {
        const cleanData = res.data.map((e) => {
          return {
            name: e.category_name,
            value: e.ingresos_totales,
          };
        });
        dispatch(setBillsPieCharts(cleanData));
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
};

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
