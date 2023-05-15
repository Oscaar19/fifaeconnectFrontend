import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    goldens: [],
    isLoading: true,
    missatge: "",
    usuari: {},
}

export const usuariSlice = createSlice({
    name: 'golden',
    initialState, 
    reducers: {
        startLoadingGoldens: (state) => {

            state.isLoading = true;

        },

        setMissatge: (state, action) => {

            state.missatge = action.payload

        },
        setGoldens: (state, action) => {

            state.goldens = action.payload

            state.isLoading = false
        },
        setUsuari: (state, action) => {

            state.usuari = action.payload

            state.isLoading = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { startLoadingGoldens, setGoldens,setMissatge,setUsuari} = usuariSlice.actions

export default usuariSlice.reducer