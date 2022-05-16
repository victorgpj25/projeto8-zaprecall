import React from 'react'

import Header from './Header.js'
import Deck from './Deck.js'
import Footer from './Footer.js'
import reactDom from 'react-dom'

export default function Recall ({recallClass}) {

    const [counter, setCounter] = React.useState(0)
    const [failsCounter, setFailsCounter] = React.useState(0)
    const [progressIcons, setProgressIcons] = React.useState([])
    

    function selectZap () {
        setCounter(counter + 1) 
        setProgressIcons([...progressIcons, <ion-icon name="checkmark-circle" class="green2"></ion-icon>])
    }

    function selectAlmost () {
        setCounter(counter + 1) 
        setProgressIcons([...progressIcons, <ion-icon name="help-circle" class="yellow2"></ion-icon>])
    }

    function selectNot () {
        setCounter(counter + 1)
        setFailsCounter(failsCounter + 1)
        console.log(failsCounter)
        setProgressIcons([...progressIcons, <ion-icon name="close-circle" class="red2"></ion-icon>])
    }


    return (
        <div className={recallClass}>
            <Header />
            <Deck selectZap={selectZap} selectAlmost={selectAlmost} selectNot={selectNot} />
            <Footer counter={counter} setCounter={setCounter} progressIcons={progressIcons} failsCounter={failsCounter} />
        </div>
    )
}