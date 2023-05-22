import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    jugadors: [],
    jugador:{ 
        nom: "",
        cognom: "",
        email: "",
        password: "",
        foto_id: "",
        fa: "",
        club_id: { id:""},
    }, 
    foto: {},
    assoliments: [],
    xarxes: {
        twitter: "",
        linkedin: "",
    },
    isLoading: true,
    missatge: "",
    golden: false,
    freeAgents: [],
}

export const jugadorSlice = createSlice({
    name: 'jugador',
    initialState, 
    reducers: {
        startLoadingJugadors: (state) => {

            state.isLoading = true;

        },

        setMissatge: (state, action) => {

            state.missatge = action.payload

        },
        setJugadors: (state, action) => {

            state.jugadors.push(action.payload)

            state.isLoading = false

        },
        clearJugadores: (state,action) => {
            state.jugadors=[]
            state.isLoading = false


        },
        clearFreeAgents: (state,action) => {
            state.freeAgents=[]
            state.isLoading = false

        },
        setJugador: (state, action) => {

            state.jugador = action.payload

            state.isLoading = false
        },
        setFoto: (state, action) => {

            state.foto = action.payload

            state.isLoading = false
        },
        setAssoliments: (state, action) => {

            state.assoliments = action.payload

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

            state.freeAgents.push(action.payload)

            state.isLoading = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { startLoadingJugadors,setMissatge, setJugadors,setJugador,setFoto,setAssoliments,setXarxes,setGolden,setFreeAgents,clearJugadores,clearFreeAgents} = jugadorSlice.actions

export default jugadorSlice.reducer