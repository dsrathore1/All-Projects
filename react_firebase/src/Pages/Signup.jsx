import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/SignUpStyle.css';


const Signup = () => {
  const [form, setForm] = useState({
    name: "",
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
            <h1 className='Title'>Sign Up</h1>
          </div>

          <div className='inputContainer'>
            <input type="text" className='ip' value={form.name} name="name" onChange={handleInput} placeholder='Name'></input>

            <input type="email" className='ip' value={form.email} name="email" onChange={handleInput} placeholder='Email'></input>

            <input type="password" className='ip' value={form.pwd} name="number" onChange={handleInput} placeholder='Password'></input>
          </div>

          <div className='btnContainer'>
            <button className='btn'>Sign Up</button>
          </div>

          <p className='question'>Already have an account ? <Link className='suLink' to='/login'>Login</Link></p>
        </div>
      </div>
    </>
  );
}

export default Signup