import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../userContext'

/**
    * This file makes all the operations related with Login.
    */

const useLogin = () => {

    const [error, setError] = useState();
    let { authToken, setAuthToken,usuari,setUsuari } = useContext(UserContext);


    /** 
     * @const checkAuthToken 
     * 
    */
    const checkAuthToken = async () => {
        let myToken =localStorage.getItem("authToken") || ""
        if(myToken.length > 0){
          const data = await fetch("http://127.0.0.1:8000/api/user", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              'Authorization': 'Bearer '  + myToken,
            },
            method: "GET",
          });

          const resposta = await data.json();
          console.log(resposta)
          if (resposta.success === true) {
            setAuthToken(myToken);
            setUsuari(resposta.user.email)
          }
        }
        else{
          setAuthToken("");
        }
    }

    /**
      * Makes the login with the given credentials and set a new authToken
      * @param {string} data data
      */
    const sendLogin = async (data) => {

        const { email,password} = data
        try {
          const data = await fetch("http://127.0.0.1:8000/api/login", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ email,password })
          });
          const resposta = await data.json();
          if (resposta.success === true) {
            localStorage.setItem("authToken",resposta.authToken)
            setAuthToken(resposta.authToken);
            setUsuari(email)
            
          }else {
            setError(resposta.message)
          }
        }catch{
          setError(data)

        };
    
    };

    useEffect(() => {
      checkAuthToken()
    }, []);

    return { sendLogin,error}
}

export default useLogin