import React from 'react'

import Menu from './Menu.js'
import Recall from './Recall.js'


export default function App () {

    const [menuClass, setMenuClass] = React.useState("menu")
    const [recallClass, setRecallClass] = React.useState("hidden")

    function startRecall () {
        setMenuClass("hidden")
        setRecallClass("recall")
    }

    return (
        <>
            <Menu menuClass={menuClass} startRecall={startRecall} />
            <Recall recallClass={recallClass} />
        </>

    )
}