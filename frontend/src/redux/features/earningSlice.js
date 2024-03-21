import { createSlice } from "@reduxjs/toolkit";
import { axiosMiFinanz } from "@/utils/configAxios";

const initialState = {
  earning: [],
  category: [],
  error: false,
};

const earningSlice = createSlice({
  name: "earning",
  initialState,
  reducers: {
    setEarningGlobal: (state, action) => {
      return { ...state, earning: action.payload };
    },
    setCategoryGlobal: (state, action) => {
      return { ...state, category: action.payload };
    },
    setChangeErrorStatus: (state) => {
      return { ...state, error: !state.error };
    },
  },
});

export const { setEarningGlobal, setCategoryGlobal, setChangeErrorStatus } =
  earningSlice.actions;

//obtener todos los bill, con el método get del usuario logueado, para ello recibe el id
export const getAllEarning = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axiosMiFinanz
      .get(`/earning/${id}`)
      .then((res) => {
        if (res.status === 200) {
          if (Array.isArray(res.data)) {
            const allEarningsData = res.data.map((earning) => {
              return {
                id: earning.id,
                name: earning.name,
                amount: earning.amount,
                date: earning.date,
                categoryId: earning.CategoryEarningId,
                category: earning.CategoryEarning,
                userId: earning.UserId,
              };
            });
            dispatch(setEarningGlobal(allEarningsData));
            resolve(allEarningsData);
          }
        } else reject(new Error("Error en la solicitud"));
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

// agregar un nuevo bill con el método post, recibe el id y la data
export const addEarning = (id, data) => (dispatch) => {
  axiosMiFinanz
    .post(`/earning/${id}`, data)
    .then((res) => dispatch(getAllEarning())) // después de crear el earning mandamos actualizamos los earning del usuario

    .catch((err) => console.error(err));
};

export const deleteEarning = (id, userId) => (dispatch) => {
  axiosMiFinanz
    .delete(`/earning/${id}`)
    .then((res) => {
      if (res.status === 200) {
        // Eliminación exitosa, obtener de nuevo la lista de ingresos
        dispatch(getAllEarning(userId));
      } else {
        console.error(
          "Error al eliminar el ingreso. Código de estado:",
          res.status
        );
      }
    })
    .catch((err) => console.error("Error al eliminar el ingreso:", err));
};

export const updateEarning = (id, data, userId) => (dispatch) => {
  axiosMiFinanz
    .put(`/earning//${id}`, data)
    .then((res) => {
      if (res.status === 200) {
        // actualización exitosa, obtener de nuevo la lista de gastos
        dispatch(getAllEarning(userId));
      } else {
        console.error(
          "Error al actualizar el ingreso. Código de estado:",
          res.status
        );
      }
    })
    .catch((err) => console.error("Error al actualizar el ingreso:", err));
};

//extraer las categorías de earning
export const getAllCategoryEarning = () => (dispatch) => {
  axiosMiFinanz
    .get("/categoryEarning")
    .then((res) => dispatch(setCategoryGlobal(res.data)))
    .catch((err) => console.error(err));
};

export default earningSlice.reducer;
