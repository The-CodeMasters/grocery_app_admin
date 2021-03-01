import React from 'react'
import "./leftNavigator.css"
import logo from "../../assets/logo.svg"
import { deshboard,user,product,earning,order,history,setting,logout } from "../../assets/icons";

export default function LeftNavigator() {
    return (
        <div className="leftNavigator">
            <div className="logo-container">
                <img src={logo} alt=""/>
            </div>
            <div className="navigators">
                <div className="nev-item">
                    <img src={deshboard} alt="" height="30px" width="30px"/>
                    <h4>Deshboard</h4>
                </div>
                <div className="nev-item">
                    <img src={user} alt="" height="30px" width="30px"/>
                    <h4>Users</h4>
                </div>
                <div className="nev-item">
                    <img src={product} alt="" height="30px" width="30px"/>
                    <h4>Products</h4>
                </div>
                <div className="nev-item">
                    <img src={earning} alt="" height="30px" width="30px"/>
                    <h4>Earning</h4>
                </div>
                <div className="nev-item">
                    <img src={order} alt="" height="30px" width="30px"/>
                    <h4>Orders</h4>
                </div>
                <div className="nev-item">
                    <img src={history} alt="" height="30px" width="30px"/>
                    <h4>History</h4>
                </div>
                <div className="nev-item">
                    <img src={setting} alt="" height="30px" width="30px"/>
                    <h4>Settings</h4>
                </div>
                <div className="nev-item">
                    <img src={logout} alt="" height="30px" width="30px"/>
                    <h4>Log Out</h4>
                </div>
                
            </div>
        </div>
    )
}
