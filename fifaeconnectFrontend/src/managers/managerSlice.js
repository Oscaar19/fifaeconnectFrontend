import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    managers: [],
    manager:{ 
        nom: "",
        cognom: "",
        email: "",
        password: "",
        foto_id: "",
        fa: "",
        club_id: { id:""},
    }, 
    foto: {},
    titulacions: [],
    xarxes: {
        twitter: "",
        linkedin: "",
    },
    page: 0,
    isLoading: true,
    missatge: "",
    adding: false,
    freeAgents: [],
}

export const managerSlice = createSlice({
    name: 'manager',
    initialState, 
    reducers: {
        startLoadingManagers: (state) => {

            state.isLoading = true;

        },

        setMissatge: (state, action) => {

            state.missatge = action.payload

        },
        setManagers: (state, action) => {

            state.managers.push(action.payload)

            state.isLoading = false
        },
        setManager: (state, action) => {

            state.manager = action.payload

            state.isLoading = false
        },
        setFoto: (state, action) => {

            state.foto = action.payload

            state.isLoading = false
        },
        setTitulacions: (state, action) => {

            state.titulacions = action.payload

            state.isLoading = false
        },
        setXarxes: (state, action) => {

            state.xarxes = action.payload

            state.isLoading = false
        },
        setPage: (state,action) => {

            state.page = action.payload
            
        },
        setAdding: (state) => {

            state.adding = true

        },

        setFreeAgents: (state, action) => {

            state.freeAgents.push(action.payload)

            state.isLoading = false
        },

        clearManagers: (state,action) => {
            state.managers=[]
            state.isLoading = false
        },
        clearFreeAgents: (state,action) => {
            state.freeAgents=[]
            state.isLoading = false

        },
    },
})

// Action creators are generated for each case reducer function
export const { startLoadingManagers, setManagers,setMissatge,setManager,setFoto,setTitulacions,setXarxes,setPage,setAdding,setFreeAgents,clearManagers,clearFreeAgents} = managerSlice.actions

export default managerSlice.reducer