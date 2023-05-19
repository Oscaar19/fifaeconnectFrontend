import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    goldens: [],
    isLoading: true,
    missatge: "",
    user: {},

}

export const goldenSlice = createSlice({
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

            state.goldens.push(action.payload)

            state.isLoading = false

            console.log(state.goldens)

        },
        setUser: (state, action) => {

            state.user = action.payload

            state.isLoading = false
        },
        clearGoldens: (state,action) => {
            state.goldens=[]
        },
    },
})

// Action creators are generated for each case reducer function
export const { startLoadingGoldens, setGoldens,setMissatge,setUser,clearGoldens} = goldenSlice.actions

export default goldenSlice.reducer