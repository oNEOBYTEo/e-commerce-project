import { useForm } from "react-hook-form";

const Singup = ({createAccount, setSingup}) => {
  
  const { register, handleSubmit, } = useForm()
  
  return ( 
    <section className='login-container'>
        <h1 className='login-tittle'>Signup</h1>
        <form className='form-login' onSubmit={handleSubmit(createAccount)}>
          <div className="input-login-container">
            <label htmlFor="first_name">First Name</label>
            <input 
            id="first_name"
            {...register("first_name")}
            type="text"
            required 
            />
          </div>
          <div className="input-login-container">
            <label htmlFor="last_name">Last Name</label>
            <input 
            id="last_name"
            {...register("last_name")}
            type="text"
            required 
            />
          </div>
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
          <button>Create Account</button>
        </form>
        <p style={{marginTop: "30px"}}>Already have an account?</p>
        <button onClick={() => setSingup(false)}>Login</button>
      </section>
   );
}
 
export default Singup;