import { useContext } from "react";
import React, { useState, useEffect } from 'react';
import { UserContext } from "../userContext";
import '../App.css';
import { Link } from 'react-router-dom';





export default function Header() {

  let { authToken, setAuthToken } = useContext(UserContext);

  function toggleNavList() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
  }
  

  const sendLogout = async (e) => {
    e.preventDefault();
    try{
        const data = await fetch("http://127.0.0.1:8000/api/logout", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              'Authorization': 'Bearer '  + authToken,
            },
            method: "POST",
        });
        const resposta = await data.json();
        if (resposta.success === true) setAuthToken("")
        else console.log("N logout")
    }catch{
        console.log(data);
        alert("Se ha producido un error.")
    }
    
  };
    

  return (
    <>
        <header>
            <nav>
                <div className="logo">
                    <img src="/img/FIFAe.png" alt="" />
                </div>
                <ul className="menu">
                    <li><Link className="header-link" to={"/jugadors"}>Jugadors</Link></li>
                    <li><Link className="header-link" to={"/coaches"}>Coaches</Link></li>
                    <li><Link className="header-link" to={"/managers"}>Managers</Link></li>
                    <li><Link className="header-link" to={"/clubs"}>Clubs d'eSports</Link></li>
                </ul>
                <div className="profile">
                    <div className="dropdown">
                        <button className="buttons"><i className="bi bi-person-circle"></i></button>
                        <div className="dropdown-content">
                            <Link to={"/elmeuperfil"}>El meu perfil</Link>
                            <a><button id="logoutButton" onClick={(e) => {
                                    sendLogout(e);
                                }}>Logout
                            </button></a>
                            
                        </div>
                    </div>                   
                </div>
                <button className="buttons menu-button" onClick={toggleNavList}>
                    <i className="bi bi-three-dots-vertical"></i>
                </button>

            </nav>
        </header>
    </>
  );
} 

