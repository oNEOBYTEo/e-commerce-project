import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch} from 'react-redux';
import { LoginComponent, Singup } from '../components';

import { doLoginThunk } from '../redux/actions';

import '../styles/login.css'


const Login = () => {

  const dispatch = useDispatch();

  const { reset } = useForm();
  const defaultValues = {email: "", password: "", first_name: "", last_name: ""}

  const [ loginError, setLoginError ] = useState("");
  const [ singup, setSingup ] = useState(false);

  
  

  const sumbit = data => {
     dispatch(doLoginThunk(data))
      .catch(() => setLoginError("Wrong Credentials"))
  }
  

  const createAccount = (data) => {
    axios
      .post('https://ecommerce-exercise-backend.herokuapp.com/users/', data)
      .then(() => {
        reset(defaultValues)
        setSingup(false)
      })
  }

  return ( 
    <main className='main-login-container'>
      {!singup ? <LoginComponent sumbit={sumbit} loginError={loginError} setSingup={setSingup} /> : <Singup createAccount={createAccount} setSingup={setSingup} />}
    </main>
   );
}
 
export default Login;