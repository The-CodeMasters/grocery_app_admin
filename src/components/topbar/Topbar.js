import React from 'react'
import "./topbar.css"
export default function Topbar ({ title }) {
    return (
        <div className="topbar">
            <h2>{title}</h2>
        </div>
    )
}
