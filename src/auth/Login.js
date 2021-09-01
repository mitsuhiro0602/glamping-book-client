import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { login } from '../actions/auth';
import LoginForm from '../components/LoginForm'
import { useDispatch } from 'react-redux';

const Login = ({history}) => {
    const [email, setEmail] = useState('0hornet0@gmail.com')
  const [password, setPassword] = useState('mitsu0602')

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await login({
        email,
        password
      });
      if(res.data) {
        window.localStorage.setItem('auth', JSON.stringify(res.data));
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: res.data,
        });
      };
      toast.success('Login success');
      history.push('/dashboard');
    } catch(err) {
      if(err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Login Page</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <LoginForm
              handleSubmit={handleSubmit}
              email={email} setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;