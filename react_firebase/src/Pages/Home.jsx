import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Nav from '../components/Nav.jsx';
import "../Styles/HomeStyle.css";


const Home = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <Nav />
      <div className='mainContainer'>
        <div className='workingPlace'>
          <textarea value={input} onChange={(e) => { setInput(e.target.value) }} placeholder='Type Something...' className='inputSide'></textarea>

          <div className='outputSide'>
            <ReactMarkdown >{input}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home