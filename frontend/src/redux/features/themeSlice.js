import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: { darkMode: 'dark' },
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = state.darkMode === 'dark' ? 'light' : 'dark';
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
