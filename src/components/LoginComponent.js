import { useForm } from "react-hook-form";

const LoginComponent = ({sumbit, loginError, setSingup}) => {

  const { register, handleSubmit} = useForm();

  return ( 
    <section className='login-container'>
        <article className='test-container'>
          <p style={{alignSelf: "center", fontWeight: "bold"}}>Test Data</p>
          <p>Email: admin@admin.com</p>
          <p>Password: root</p>
        </article>
        <h1 className='login-tittle'>Login</h1>
        <form className='form-login' onSubmit={handleSubmit(sumbit)}>
          <div className="input-login-container">
            <label htmlFor="email">Email</label>
            <input 
            {...register("email")}
            type="email"
            required 
            />
          </div>
          <div className="input-login-container">
            <label htmlFor="password">Password</label>
            <input 
            {...register("password")}
            type="password"
            required 
            />
          </div>
          {loginError && <p>{loginError}</p>}
          <button>Log in</button>
        </form>
        <p style={{marginTop: "30px"}}>Don't have an account?</p>
        <button onClick={() => setSingup(true)}>Singup</button>
      </section>
        
   );
}
 
export default LoginComponent;