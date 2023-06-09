import { startLoadingGoldens, setGoldens,setMissatge,setUser,clearGoldens} from './goldenSlice'

export const getUser = (id) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingGoldens());

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
            dispatch(setGoldens(resposta.data));
        }

        else {

            dispatch(setMissatge(resposta.message));

        }

    };
}

export const getGoldens = (authToken) => {

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


        let url ="http://equip08.insjoaquimmir.cat/api/goldens";

        
        const data = await fetch(url, headers);
 
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(clearGoldens())
            resposta.data.map((user) => (
                dispatch(getUser(user.id_valorat))
            ))
        }

        else {

            dispatch(setMissatge(resposta.message));

        }


    };
}
