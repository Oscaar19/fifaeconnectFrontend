import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    coaches: [],
    coach:{ 
        nom: "",
        cognom: "",
        email: "",
        password: "",
        foto_id: "",
        fa: "",
        club_id: { id:""},
    }, 
    foto: {},
    experiencies: [],
    xarxes: {
        twitter: "",
        linkedin: "",
    },
    isLoading: true,
    missatge: "",
    golden: false,
    freeAgents: [],
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

            state.coaches.push(action.payload)

            state.isLoading = false
        },
        setCoach: (state, action) => {

            state.coach = action.payload

            state.isLoading = false
        },
        setFoto: (state, action) => {

            state.foto = action.payload

            state.isLoading = false
        },
        setExperiencies: (state, action) => {

            state.experiencies = action.payload

            state.isLoading = false
        },
        setXarxes: (state, action) => {

            state.xarxes = action.payload

            state.isLoading = false
        },
        setGolden: (state,action) => {

            state.golden = action.payload
            state.isLoading=false

        },
        setFreeAgents: (state, action) => {

            state.freeAgents = action.payload

            state.isLoading = false
        },
        clearCoaches: (state,action) => {
            state.coaches=[]
            state.isLoading = false

        },
    },
})

// Action creators are generated for each case reducer function
export const { startLoadingCoaches,setMissatge, setCoaches,setCoach,setFoto,setExperiencies,setXarxes,setGolden,setFreeAgents,clearCoaches} = coachSlice.actions

export default coachSlice.reducer