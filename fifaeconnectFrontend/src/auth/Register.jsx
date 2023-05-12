import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../userContext";
import { useForm } from "react-hook-form";

export default function Register({ setCanvi }) {
  let [missatge, setMessage] = useState("");
  let { authToken, setAuthToken } = useContext(UserContext);

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => handleRegister(data)



  const handleRegister = async (data) => {
    
    const { nom,cognom, password, password2, email } = data

    if (password2 !== password) {
      setMessage("Els passwords han de coincidir");
      return false;
    }

    try{
      const data = await fetch("http://127.0.0.1:8000/api/register", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ nom,cognom, email, password })
      });
      const resposta = await data.json();
      if (resposta.success === true) setAuthToken(resposta.authToken);
      else setMessage(resposta.message);
    }catch{
      console.log(data);
      alert("Se ha producido un error.");
    }
  };

  return (
    <>
      <div className="register-container">
        <h1>CREA UN PERFIL</h1>
        <div className="input-container">
          <input type="text" placeholder="NOM" {...register("nom",{
                                        required: "Aquest camp és obligatori",
                                      })}/>
          {errors.nom && <p>{errors.nom.message}</p>}
          <input type="text" placeholder="COGNOM" {...register("cognom",{
                                        required: "Aquest camp és obligatori",
                                      })}/>
          {errors.cognom && <p>{errors.cognom.message}</p>}

          <input type="email" placeholder="EMAIL" {...register("email",{
                                                      required: "Aquest camp és obligatori",
                                                    })}/>
          {errors.email && <p>{errors.email.message}</p>}
          <input  type="password" placeholder="CONTRASENYA" {...register("password",{
                                                            required: "Aquest camp és obligatori",
                                                          })}/>
          {errors.password && <p>{errors.password.message}</p>}
          <input type="password" placeholder="CONFIRMA CONTRASENYA" {...register("password2",{
                                                                  required: "Aquest camp és obligatori",
                                                                })}/>
          {errors.password2 && <p>{errors.password2.message}</p>}
          {missatge ? <div>{missatge}</div> : <></>}
          <br />
        </div>
        <div className="buttons-container">
          <button className="botoRegistre" onClick={handleSubmit(onSubmit)}>REGISTRA'M</button>
          <button className="botoRegistre" onClick={() => { setCanvi(true)}}>TENS COMPTE?</button>
        </div>
      </div>
    </>
  );
}