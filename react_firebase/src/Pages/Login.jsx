import { React, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/LoginStyle.css';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  });

  const [form, setForm] = useState({
    email: "",
    pwd: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prev) => {
      return { ...prev, [name]: value }
    });

  }


  return (
    <>
      <div className='mainContainer2'>
        <div className='container2'>

          <div className='titleContainer'>
            <h1 className='Title'>Login</h1>
          </div>

          <div className='inputContainer'>
            <input type="email" className='ip' value={form.email} name="email" onChange={handleInput} placeholder='Email'></input>

            <input type="password" className='ip' value={form.pwd} name="pwd" onChange={handleInput} placeholder='Password'></input>
          </div>

          <div className='forgetContainer'>
            <Link className='fpLink' to='/'>Forget Password ?</Link>
          </div>

          <div className='btnContainer'>
            <Link to='/'>
              <button className='btn' onClick={() => { navigate("/") }}>Login</button>
            </Link>
          </div>

          <p className='question'>Do not have an account ? <Link className='suLink' to='/signup'>Sign Up</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login