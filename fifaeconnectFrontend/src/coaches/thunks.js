import { startLoadingCoaches,setMissatge, setCoaches,setCoach,setFoto,setExperiencies,setXarxes,setGolden,setFreeAgents,clearCoaches} from './coachSlice'

export const getUser = (id) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingCoaches());

        const data = await fetch("http://127.0.0.1:8000/api/users/" + id, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",

            },
            method: "GET",
        })

        const resposta = await data.json();
        if (resposta.success == true) {
            console.log(resposta)
            resposta.data.foto = resposta.foto
            dispatch(setCoaches(resposta.data));
        }

        else {

            dispatch(setMissatge(resposta.message));

        }

    };
}

export const getCoaches = () => {

    return async (dispatch, getState) => {

        dispatch(startLoadingCoaches());

        const headers = {

            headers: {

                Accept: "application/json",

                "Content-Type": "application/json",

            },

            method: "GET",

        };


        let url ="http://127.0.0.1:8000/api/coaches";

        
        const data = await fetch(url, headers);
 
        const resposta = await data.json();

        if (resposta.success == true) {

            dispatch(clearCoaches())
            resposta.data.map((user) => (
                dispatch(getUser(user.id))
            ))
        }

        else {

            dispatch(setMissatge(resposta.message));

        }


    };
}

export const addCoach = (formulari,authToken) => {

    return async (dispatch, getState) => {


        let {twitter,linkedin,foto,fa,club_id,experiencies}=formulari;


        const formData = new FormData();
        formData.append("twitter", twitter);
        formData.append("linkedin", linkedin);
        formData.append("foto", foto);
        formData.append("fa", fa);
        formData.append("club_id",club_id);
        formData.append("experiencies",JSON.stringify(experiencies));        
        


        const data = await fetch("http://127.0.0.1:8000/api/coaches/",

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
            dispatch(getCoaches());
        }

        else {

            dispatch(setMissatge(resposta.message));

        }
    };
}

export const getCoach = (authToken, id) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingCoaches());

        const data = await fetch("http://127.0.0.1:8000/api/coaches/" + id, {
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
            dispatch(setCoach(resposta.coach));
            dispatch(setFoto(resposta.foto));
            dispatch(setExperiencies(resposta.experiencies));
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
            console.log("no estaba")
        }else{
            console.log("ya estaba")
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

export const getFreeAgents = (authToken) => {

    return async (dispatch, getState) => {

        dispatch(startLoadingCoaches());

        const headers = {

            headers: {

                Accept: "application/json",

                "Content-Type": "application/json",

                Authorization: "Bearer " + authToken,

            },

            method: "GET",

        };


        let url ="http://127.0.0.1:8000/api/coaches/freeagents";

        
        const data = await fetch(url, headers);
 
        const resposta = await data.json();
        if (resposta.success == true) {
            console.log(resposta)
            dispatch(setFreeAgents(resposta.data));
        }

        else {

            dispatch(setMissatge(resposta.message));

        }


    };
}