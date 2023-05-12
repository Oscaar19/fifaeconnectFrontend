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
    foto: "",
    titulacions: [],
    page: 0,
    isLoading: true,
    missatge: "",
    adding: false,
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

            state.managers = action.payload

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
        setPage: (state,action) => {

            state.page = action.payload
            
        },
        setAdding: (state) => {

            state.adding = true

        },
    },
})

// Action creators are generated for each case reducer function
export const { startLoadingManagers, setManagers,setMissatge,setManager,setFoto,setTitulacions,setPage,setAdding} = managerSlice.actions

export default managerSlice.reducer