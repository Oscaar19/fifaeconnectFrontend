import { startLoadingJugadors,clearFreeAgents,setMissatge, setJugadors,setJugador,setFoto,setAssoliments,setXarxes,setGolden,setFreeAgents,clearJugadores} from './jugadorSlice'

export const getUser = (id) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingJugadors());
        const data = await fetch("http://equip08.insjoaquimmir.cat/api/users/" + id, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",

            },
            method: "GET",
        })

        const resposta = await data.json();
        if (resposta.success == true) {
            resposta.data.foto = resposta.foto
            dispatch(setJugadors(resposta.data));
            if(resposta.data.fa == 1){
                dispatch(setFreeAgents(resposta.data))
            }
        }

        else {
            dispatch(setMissatge(resposta.message));

        }

    };
}

export const getJugadors = () => {

    return async (dispatch, getState) => {

        dispatch(startLoadingJugadors());

        const headers = {

            headers: {

                Accept: "application/json",

                "Content-Type": "application/json",

            },

            method: "GET",

        };


        let url ="http://equip08.insjoaquimmir.cat/api/jugadors";

        
        const data = await fetch(url, headers);
 
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(clearJugadores())
            resposta.data.map((user) => (
                dispatch(getUser(user.id))
            ))
        }

        else {
            dispatch(setMissatge(resposta.message));

        }


    };
}

export const addJugador = (formulari,authToken) => {

    return async (dispatch, getState) => {


        let {twitter,linkedin,foto,fa,club_id,assoliments}=formulari;


        const formData = new FormData();
        formData.append("twitter", twitter);
        formData.append("linkedin", linkedin);
        formData.append("foto", foto);
        formData.append("fa", fa);
        formData.append("club_id",club_id);
        formData.append("assoliments",JSON.stringify(assoliments));        
        


        const data = await fetch("http://equip08.insjoaquimmir.cat/api/jugadors/",

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
            dispatch(setMissatge("Coach afegit correctament."))
            dispatch(getJugadors());
        }

        else {

            dispatch(setMissatge(resposta.message));

        }
    };
}

export const getJugador = (authToken, id) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingJugadors());

        const data = await fetch("http://equip08.insjoaquimmir.cat/api/jugadors/" + id, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer '  + authToken,

            },
            method: "GET",
        })

        const resposta = await data.json();
        if (resposta.success == true) {
            dispatch(setJugador(resposta.jugador));
            dispatch(setFoto(resposta.foto));
            dispatch(setAssoliments(resposta.assoliments));
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
        const data = await fetch("http://equip08.insjoaquimmir.cat/api/users/" + id+"/goldens", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer '  + authToken,

            },
            method: "POST",
        })
        const resposta = await data.json();
        if (resposta.success === true) {
            const data = await fetch("http://equip08.insjoaquimmir.cat/api/users/" + id+"/goldens", {
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
    }
}

export const goldenUser = (id,authToken) => {

    return async (dispatch,state) => {
        const data = await fetch("http://equip08.insjoaquimmir.cat/api/users/" + id+"/goldens", {
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
        const data = await fetch("http://equip08.insjoaquimmir.cat/api/users/" + id+"/goldens", {
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

export const getFreeAgents = (authToken) => {

    return async (dispatch, getState) => {

        dispatch(startLoadingJugadors());

        const headers = {

            headers: {

                Accept: "application/json",

                "Content-Type": "application/json",

                Authorization: "Bearer " + authToken,

            },

            method: "GET",

        };


        let url ="http://equip08.insjoaquimmir.cat/api/jugadors/freeagents";

        
        const data = await fetch(url, headers);
 
        const resposta = await data.json();
        if (resposta.success == true) {
            dispatch(clearFreeAgents())
            resposta.data.map((user) => (
                dispatch(getUser(user.id))
            ))
        }

        else {

            dispatch(setMissatge(resposta.message));

        }


    };
}