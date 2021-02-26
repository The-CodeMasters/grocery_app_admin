import React from 'react'
import "./login.css"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <div className="main">
            <div className="left">
               <img src={logo} alt=""/>
            </div>
            <div className="right">
                <div className="container">
                    <h1>Admin Panel</h1>
                    <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input type="text"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">password</label>
                        <input type="password"/>
                    </div>
                    <div className="keep-me-login">
                        <input type="checkbox"/>
                        <label htmlFor="">Keep me login</label>
                    </div>
                   
                        <Link to="/deshboard">
                        <button>Login</button>
                        </Link>
                    
                </div>
            </div>
        </div>
    )
}