import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    coaches: [],
    page: 0,
    isLoading: true,
    missatge: "",
    adding: false,
}

export const coachSlice = createSlice({
    name: 'coach',
    initialState, 
    reducers: {
        startLoadingCoaches: (state) => {

            state.isLoading = true;

        },

        setMissatge: (state, action) => {

            state.missatge = action.payload

        },
        setCoaches: (state, action) => {

            state.coaches = action.payload

            state.isLoading = false
        },
        setPage: (state,action) => {

            state.page = action.payload
            
        },
        setAdding: (state) => {

            state.adding = true

        },
    },
})

// Action creators are generated for each case reducer function
export const { startLoadingCoaches, setCoaches,setMissatge,setPage,setAdding} = coachSlice.actions

export default coachSlice.reducer