import React from "react"

import logo from './img/logo.png'


export default function Menu ({menuClass, startRecall}) {
    return (
        <div className={menuClass}>
            <img src={logo} alt="Logo ZapRecall" />
            <h1>ZapRecall</h1>
            <div className="startButton" onClick={startRecall}>Iniciar Recall!</div>
        </div>
    )
}