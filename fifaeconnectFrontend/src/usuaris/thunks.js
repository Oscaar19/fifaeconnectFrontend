import { startLoadingGoldens, setGoldens,setMissatge,setUsuari } from './usuariSlice'

export const getUsuari = (id) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingGoldens());

        const data = await fetch("http://127.0.0.1:8000/api/users/" + id, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "GET",
        })

        const resposta = await data.json();
        if (resposta.success == true) {
            dispatch(setUsuari(resposta.data));
        }

        else {

            dispatch(setMissatge(resposta.message));

        }

    };
}

export const getManagers = (page = 0,authToken) => {

    return async (dispatch, getState) => {

        dispatch(startLoadingGoldens());

        const headers = {

            headers: {

                Accept: "application/json",

                "Content-Type": "application/json",

                Authorization: "Bearer " + authToken,

            },

            method: "GET",

        };


        let url ="http://127.0.0.1:8000/api/goldens";

        
        const data = await fetch(url, headers);
 
        const resposta = await data.json();

        const state = getState();
        const goldens = state.usuaris.goldens;

        if (resposta.success == true) {
            for (let i = 0; i < resposta.data.length; i++) {
                text += cars[i] + "<br>";
            }
            dispatch(setGoldens(resposta.data));
        }

        else {

            dispatch(setMissatge(resposta.message));

        }


    };
}