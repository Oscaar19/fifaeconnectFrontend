import useLogin from "../hooks/useLogin";
import { useForm } from "react-hook-form";

export default function Login({ setCanvi }) {


  const { register, handleSubmit,  formState: { errors } } = useForm();
  let {sendLogin,error} = useLogin()
  const onSubmit = data => sendLogin(data)

  return (
    <>
      <div className="">
        <h1>Log In</h1>
          
        <br />    
        <button onClick={handleSubmit(onSubmit)}>LOG IN</button>
        <br />
        <br />
        {error ? <div>{error}</div> : <></>}
        <br />
        <button
          className="btn btn-primary"
          onClick={() => {
            setCanvi(false);
          }}
        >
          Not registered?
        </button>
      </div>
    </>
  );
}