import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    clubs: [],
    club:{ 
        nom: "",
        foto: "",
    }, 
    manager: {},
    jugadors: [],
    coaches: [],
    isLoading: true,
    missatge: "",
}

export const clubSlice = createSlice({
    name: 'club',
    initialState, 
    reducers: {
        startLoadingClubs: (state) => {

            state.isLoading = true;

        },

        setMissatge: (state, action) => {

            state.missatge = action.payload

        },
        setClubs: (state, action) => {

            state.clubs.push(action.payload)

            state.isLoading = false
        },
        setClub: (state, action) => {

            state.club = action.payload

            state.isLoading = false

        },
        setManager: (state, action) => {

            state.manager = action.payload

            state.isLoading = false
        },
        setJugadors: (state, action) => {

            state.jugadors = action.payload

            state.isLoading = false
        },
        setCoaches: (state, action) => {

            state.coaches = action.payload

            state.isLoading = false
        },
        clearClubs: (state,action) => {
            state.clubs=[]
        },
    },
})

// Action creators are generated for each case reducer function
export const { startLoadingClubs,setMissatge,setClubs,setClub,setManager,setJugadors,setCoaches,clearClubs} = clubSlice.actions

export default clubSlice.reducer