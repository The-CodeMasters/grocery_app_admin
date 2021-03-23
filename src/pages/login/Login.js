import React, { useState } from 'react'
import "./login.css"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
export default function Login ({ islogin, setislogin }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, seterr] = useState(null)

    const handleSubmit = () => {
        if (!email.includes('@')) {
            seterr("email is not in proper format!!")
            setTimeout(() => {
                seterr(null)
            }, 4000)
        }
        if (email == "deep@gmail.com" && password == "deep") {
            localStorage.setItem("islogin", true)
            setislogin(!islogin)
        }
    }
    return (
        <div className="login">
            <div className="left">
                <img src={logo} alt="" />
            </div>
            <div className="right">
                <div className="container">
                    <h1>Admin Panel</h1>
                    {
                        err ? <div className="error">
                            <p>{err}</p>
                        </div> : ""
                    }
                    <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <div className="keep-me-login">
                        <input type="checkbox" />
                        <label htmlFor="">Keep me login</label>
                    </div>

                    {/* <Link to="/deshboard"> */}
                    <button onClick={() => handleSubmit()}>Login</button>
                    {/* </Link> */}

                </div>
            </div>
        </div>
    )
}