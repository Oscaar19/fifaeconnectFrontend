import { useContext } from "react";
import React, { useState, useEffect } from 'react';
import { UserContext } from "../userContext";
import '../App.css';


export default function Header() {
  let [ userName, setUserName ] = useState("");
  let [ roles, setRoles] = useState([]);

//   const sendLogout = async (e) => {
//     e.preventDefault();
//     try{
//         const data = await fetch("https://backend.insjoaquimmir.cat/api/logout", {
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json",
//               'Authorization': 'Bearer '  + authToken,
//             },
//             method: "POST",
//         });
//         const resposta = await data.json();
//         if (resposta.success === true) setAuthToken("")
//         else console.log("N logout")
//     }catch{
//         console.log(data);
//         alert("Se ha producido un error.")
//     }
    
//   };

    // const getUserName = async (e) => {
    //     try{
    //         const data = await fetch("https://backend.insjoaquimmir.cat/api/user", {
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json",
    //                 'Authorization': 'Bearer '  + authToken,
    //             },
    //             method: "GET",
    //         })
    //         const resposta = await data.json();
    //         console.log(resposta)
    //         if (resposta.success === true) {
    //             setUserName(resposta.user.name);
    //             setRoles(resposta.roles);
    //         }
    //         else console.log("No user found")
    //     }catch{
    //         console.log(data);
    //         alert("Se ha producido un error.");
    //     }
    // }
    // useEffect(() => {
    //     getUserName();
    // }, [])
    

  return (
    <>
        <header>
            <nav>
                <div className="logo">
                    <img src="ruta/a/tu/logo.png" alt="Logo de la página" />
                </div>
                <ul className="menu">
                    <li><a href="#">Jugadores</a></li>
                    <li><a href="#">Coaches</a></li>
                    <li><a href="#">Managers</a></li>
                    <li><a href="#">Clubes de eSports</a></li>
                </ul>
                <div className="profile">
                    <a href="#">Acceder a mi perfil</a>
                </div>
            </nav>
        </header>
    </>
  );
} 

