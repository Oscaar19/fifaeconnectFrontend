import useLogin from "../hooks/useLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../userContext";

export default function Login({ setCanvi }) {

  const { register, handleSubmit,  formState: { errors } } = useForm();
  let {sendLogin,error} = useLogin()
  const onSubmit = data => sendLogin(data)

  return (
    <>
      <div className="login-container">
        <h1>LOGIN</h1>
        <div className="input-container">
          <input type="email" {...register("email")} placeholder="EMAIL"/>
          <input type="password" {...register("password")} placeholder="PASSWORD"/>
          {error ? <div>{error}</div> : <></>}
        </div>
        <div className="buttons-container">
          <button className='botoRegistre' onClick={handleSubmit(onSubmit)}>LOGIN</button>
          <button className='botoRegistre' onClick={() => {setCanvi(false);}}>NO ESTÀS REGISTRAT?</button>
        </div>
      </div>
    </>
  );
}