import React from 'react'

import logo from './img/logo.png'


export default function App () {

    const [welcomeClass, setWelcomeClass] = React.useState("welcome")
    const [recallClass, setRecallClass] = React.useState("hidden")

    function startRecall () {
        setWelcomeClass("welcome hidden")
        setRecallClass("recall")
    }

    return (
        <>
            <div className={welcomeClass}>
                <img src={logo} alt="Logo ZapRecall" />
                <h1>ZapRecall</h1>
                <div className="startButton" onClick={startRecall}>Iniciar Recall!</div>
            </div>
        </>

    )
}