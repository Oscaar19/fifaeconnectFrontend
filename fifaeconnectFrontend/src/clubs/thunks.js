import { startLoadingClubs,setMissatge,setClubs,setClub,setManager,setJugadors,setCoaches,clearClubs } from './clubSlice'

export const getClubs = () => {

    return async (dispatch, getState) => {

        dispatch(startLoadingClubs());

        const headers = {

            headers: {

                Accept: "application/json",

                "Content-Type": "application/json",

            },

            method: "GET",

        };


        let url ="http://equip08.insjoaquimmir.cat/api/clubs";

        
        const data = await fetch(url, headers);
 
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(clearClubs())
            resposta.data.map((club) => (
                dispatch(getClub(club.id))
            ))
        }

        else {

            dispatch(setMissatge(resposta.message));

        }


    };
}

export const addClub = (formulari,authToken) => {

    return async (dispatch, getState) => {


        let {nom,foto}=formulari;


        const formData = new FormData();
        formData.append("nom", nom);
        formData.append("foto", foto);


        const data = await fetch("http://equip08.insjoaquimmir.cat/api/clubs/",

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
            dispatch(setMissatge("Club afegit correctament."))
            dispatch(getClubs());
        }

        else {

            dispatch(setMissatge(resposta.message));

        }
    };
}


export const getClub = (id) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingClubs());

        const data = await fetch("http://equip08.insjoaquimmir.cat/api/clubs/" + id, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",

            },
            method: "GET",
        })

        const resposta = await data.json();
        if (resposta.success == true) {
            resposta.club.foto = resposta.foto
            resposta.club.manager = resposta.manager
            resposta.club.coaches = resposta.coaches
            resposta.club.jugadors = resposta.jugadors
            dispatch(setClubs(resposta.club));            
            dispatch(setClub(resposta.club));            

        }

        else {

            dispatch(setMissatge(resposta.message));

        }

    };
}
