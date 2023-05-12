import { startLoadingCoaches, setCoaches,setMissatge,setPage,setAdding} from './coachSlice'

export const getCoaches = (page = 0,authToken) => {

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


        let url ="http://127.0.0.1:8000/api/coaches";

        
        const data = await fetch(url, headers);
 
        const resposta = await data.json();

        if (resposta.success == true) {

            dispatch(setCoaches(resposta.data));
        }

        else {

            dispatch(setMissatge(resposta.message));

        }


    };
}

export const addCoach = (formulari,authToken) => {

    return async (dispatch, getState) => {


        let {fa,club_actual,experiencies}=formulari;



        const formData = new FormData();
        formData.append("experiencies", experiencies);
        formData.append("club_actual", club_actual);
        formData.append("fa", fa);


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
            dispatch(getCoaches(0,authToken));
        }

        else {

            dispatch(setMissatge(resposta.message));

        }
    };
}