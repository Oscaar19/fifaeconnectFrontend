import React from 'react';
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const LoginRegister = () => {

    let [isLogin, setLogin] = useState(true);

    return (
        <div className='auth-container'>
            <div id='logo-container'><img id='logoPng' src="/img/FIFAe.png" alt="" /></div>
            {isLogin ? <Login setCanvi={setLogin} /> : <Register setCanvi={setLogin} />}
        </div>
    );
  
}

export default LoginRegister