import { createSlice } from "@reduxjs/toolkit";
import { axiosMiFinanz } from "@/utils/configAxios";

const initialState = {
  bill: [],
  error: false,
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    setBillGlobal: (state, action) => {
      return { ...state, bill: action.payload };
    },
    setChangeErrorStatus: (state) => {
      return { ...state, error: !state.error };
    },
  },
});

export const { setBillGlobal, setChangeErrorStatus } = billSlice.actions;

//obtener todos los bill, con el método get del usuario logueado, para ello recibe el id
export const getAllBill = (id) => (dispatch) => {
  axiosMiFinanz
    .get(`/bill/user/${id}/bills`)
    .then((res) => dispatch(setBillGlobal(res.data.results)))
    .catch((err) => console.log(err));
};

// agregar un nuevo bill con el método post, recibe el id y la data
export const addBill = (id, data) => (dispatch) => {
  console.log(id, data);
  axiosMiFinanz
    .post(`/bill/user/${id}`, data)
    .then((res) => dispatch(getAllBill())) // después de crear el bill mandamos actualizamos los bill del usuario

    .catch((err) => console.log(err));
};

export default billSlice.reducer;
