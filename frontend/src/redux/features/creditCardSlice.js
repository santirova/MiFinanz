import { createSlice } from "@reduxjs/toolkit";
import { axiosMiFinanz } from "@/utils/configAxios";

const initialState = [];

export const creditCardSlice = createSlice({
  name: "cards",
  initialState: initialState,
  reducers: {
    // put all the cards on state
    getAllCards: (state, action) => {
      return action.payload;
    },
    addCard: (state, action) => {
      state.push(action.payload);
    },
    getCardById: (state, action) => {
      const card = state.filter((card) => card.id === action.payload);
      return card.length ? card : [];
    },
    editCard: (state, action) => {
      state.map((card) => {
        if (card.id === action.payload.id) {
          card.name = action.payload.name;
          card.bankName = action.payload.bank_name;
          card.branch = action.payload.branch;
        }
      });
    },
    deleteCard: (state, action) => {
      return state.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, getAllCards, getCardById, editCard, deleteCard } =
  creditCardSlice.actions;

export const getAllCardsAction = (userId) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axiosMiFinanz
      .get(`/card/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          const allCardsData = res.data.map((card) => {
            return {
              id: card.id,
              name: card.name,
              bankName: card.bank_name,
              branch: card.branch,
            };
          });
          dispatch(getAllCards(allCardsData));
          resolve(allCardsData);
        } else reject(new Error("Error en la solicitud"));
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
};

export const addCardAction =
  (userid, name, bank_name, branch) => (dispatch) => {
    return new Promise((resolve, reject) => {
      // Devuelve una promesa para poder capturar el error en el componente
      axiosMiFinanz
        .post(`/card/${userid}`, { name, bank_name, branch })
        .then((res) => {
          if (res.status === 200) {
            const cleanData = {
              id: res.data.card.id,
              name: res.data.card.name,
              bankName: res.data.card.bank_name,
              branch: res.data.card.branch,
            };
            dispatch(addCard(cleanData));
            resolve(cleanData);
          } else reject(new Error("Error en la solicitud"));
        })
        .catch((err) => {
          reject(new Error(err));
        });
    });
  };

export const editCardAction =
  (cardId, name, bank_name, branch) => (dispatch) => {
    return new Promise((resolve, reject) => {
      axiosMiFinanz
        .put(`/card/${cardId}`, { name, bank_name, branch })
        .then((res) => {
          if (res.status === 200) {
            const cleanData = {
              name: res.data.name,
              bankName: res.data.bank_name,
              branch: res.data.branch,
            };
            dispatch(editCard(cleanData));
            resolve(cleanData);
          } else reject(new Error("Error en la solicitud"));
        })
        .catch((err) => {
          reject(new Error(err));
        });
    });
  };

export const deleteCardAction = (cardId) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axiosMiFinanz
      .delete(`/card/${cardId}`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(deleteCard(cardId));
          resolve();
        } else reject(new Error("Error en la solicitud"));
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
};

export default creditCardSlice.reducer;
