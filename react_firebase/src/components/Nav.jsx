import React, { useEffect } from "react";
import '../Styles/NavStyle.css';
import { BiUserCircle } from 'react-icons/bi';
import { IoMdLogOut } from 'react-icons/io';
import { useNavigate } from "react-router-dom";

const Nav = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Home"
    });

    return (
        <>
            <div className="navContainer">
                <h1 className="logo">MD</h1>
                <h1 className="title">Markdown Clone</h1>
                <div className="menu">
                    <ol className="allList">
                        <li className="menuOption">Home</li>
                        <li className="menuOption">About</li>
                        <div className="profile">
                            <BiUserCircle className="avatarIcon"></BiUserCircle>
                            <li className="menuOption emailId">{ }</li>
                        </div>
                        <button onClick={() => { navigate("/login") }} className="menuOption btn1"><IoMdLogOut className="logoutIcon"></IoMdLogOut> </button>
                    </ol>
                </div>
            </div>
        </>
    );
}

export default Nav;