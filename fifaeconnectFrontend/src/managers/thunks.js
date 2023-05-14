import { startLoadingManagers, setManagers,setMissatge,setManager,setFoto,setTitulacions,setXarxes,setPage } from './managerSlice'

export const getManagers = (page = 0,authToken) => {

    return async (dispatch, getState) => {

        dispatch(startLoadingManagers());

        const headers = {

            headers: {

                Accept: "application/json",

                "Content-Type": "application/json",

                Authorization: "Bearer " + authToken,

            },

            method: "GET",

        };


        let url ="http://127.0.0.1:8000/api/managers";

        
        const data = await fetch(url, headers);
 
        const resposta = await data.json();

        if (resposta.success == true) {
            console.log(resposta.data)
            dispatch(setManagers(resposta.data));
        }

        else {

            dispatch(setMissatge(resposta.message));

        }


    };
}

export const addManager = (formulari,authToken) => {

    return async (dispatch, getState) => {


        let {twitter,linkedin,foto,titulacions}=formulari;


        const formData = new FormData();
        formData.append("twitter", twitter);
        formData.append("linkedin", linkedin);
        formData.append("foto", foto);
        formData.append("titulacions",JSON.stringify(titulacions));  


        const data = await fetch("http://127.0.0.1:8000/api/managers/",

            {

                headers: {

                    Accept: "application/json",
                    Authorization: "Bearer " + authToken,

                },

                method: "POST",
                body: formData

            }

        );
        
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setMissatge("Manager afegit correctament."))
            dispatch(getManagers(0,authToken));
        }

        else {

            dispatch(setMissatge(resposta.message));

        }
    };
}


export const getManager = (authToken, id) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingManagers());

        const data = await fetch("http://127.0.0.1:8000/api/managers/" + id, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer '  + authToken,

            },
            method: "GET",
        })

        const resposta = await data.json();
        console.log(resposta)
        if (resposta.success == true) {
            dispatch(setManager(resposta.manager));
            dispatch(setFoto(resposta.foto));
            dispatch(setTitulacions(resposta.titulacions));
            dispatch(setXarxes(resposta.xarxes));
        }

        else {

            dispatch(setMissatge(resposta.message));

        }

    };
}