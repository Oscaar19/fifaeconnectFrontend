import { startLoadingManagers, setManagers,setMissatge,setManager,setFoto,setTitulacions,setXarxes,setPage,setGolden } from './managerSlice'

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
            dispatch(testGolden(authToken, id))
        }

        else {

            dispatch(setMissatge(resposta.message));

        }

    };
}

export const testGolden = (authToken,id) => {
    return async (dispatch,state) => {
        const data = await fetch("http://127.0.0.1:8000/api/users/" + id+"/goldens", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer '  + authToken,

            },
            method: "POST",
        })
        const resposta = await data.json();
        if (resposta.success === true) {
            const data = await fetch("http://127.0.0.1:8000/api/users/" + id+"/goldens", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer '  + authToken,

                },
                method: "DELETE",
            })
        }else{
            dispatch(setGolden(true))
        }
        console.log("Salgo del test")
    }
}

export const goldenUser = (id,authToken) => {

    return async (dispatch,state) => {
        const data = await fetch("http://127.0.0.1:8000/api/users/" + id+"/goldens", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer '  + authToken,

            },
            method: "POST",
        })
        const resposta = await data.json();
        if (resposta.success === true) {
            dispatch(setGolden(true))
        }
    }
}

export const ungoldenUser = (id,authToken) => {

    return async (dispatch,state) => {
        const data = await fetch("http://127.0.0.1:8000/api/users/" + id+"/goldens", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer '  + authToken,

            },
            method: "DELETE",
        })
        const resposta = await data.json();
        if (resposta.success === true) {
            dispatch(setGolden(false))
        }
    }
}