import { createSlice } from "@reduxjs/toolkit";
import { axiosMiFinanz } from "@/utils/configAxios";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    billsPieChart: null,
  },
  reducers: {
    setBillsPieCharts: (state, action) => {
      state.billsPieChart = action.payload;
    },
  },
});
const { setBillsPieCharts } = dashboardSlice.actions;

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
export default dashboardSlice.reducer;
