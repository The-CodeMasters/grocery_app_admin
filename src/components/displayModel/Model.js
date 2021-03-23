import React from 'react'
import "./model.css"
import { back } from "../../assets/icons"

export default function Model ({ openmodel, setopenmodel }) {
    const modelhandler = () => {

        setopenmodel(!openmodel)
    }

    return (
        <div className="model" onClick={modelhandler}>

            <div className="model-info" onClick={(e) => e.stopPropagation()} >
                <div className="modelheader">
                    <img src={back} alt="" onClick={modelhandler} />
                    <h2>User Detail</h2>
                </div>

                <div className="userinfo">
                    <div className="key">User ID</div>
                    <div className="value">LKJJ56565</div>
                </div>
                <div className="userinfo">
                    <div className="key">Name</div>
                    <div className="value">Sangani Deep Rameshbhai</div>
                </div>
                <div className="userinfo">
                    <div className="key">Phone no</div>
                    <div className="value">+91 9727164672</div>
                </div>
                <div className="userinfo">
                    <div className="key">Email Address</div>
                    <div className="value">drsangani1210@gmail.com</div>
                </div>
            </div>

        </div>

    )



}
