import React from "react"

import arrow from "./img/setinha.png"

export default function Card ({questionNumber, question, answer, selectZap, selectAlmost, selectNot}) {

    const [cardClass, setCardClass] = React.useState("questionNumber")
    const [content, setContent] = React.useState(0)
    const [color, setColor] = React.useState("")

    return (
        <li className={cardClass} >
            {content === 0 ? 
            <>
                <h2>{questionNumber}</h2>
                <ion-icon name="play-outline" onClick={() => {setContent(1)
                setCardClass("question")}}></ion-icon>
            </> 
            : content ===  1 ? 
            <>
                <h2>{question}</h2>
                <img src={arrow} alt="arrow" onClick={() => setContent(2)}/>
            </> 
            : content === 2 ? 
            <>
                <h2>{answer}</h2>
                <div className="options">
                    <div className="option red" onClick={() => { selectNot()
                    setContent(3)
                    setColor("red")
                    setCardClass("questionFinished red2")}}>Não lembrei</div>
                    <div className="option yellow" onClick={() => {selectAlmost()
                    setContent(3)
                    setColor("yellow")
                    setCardClass("questionFinished yellow2")}}>Quase não lembrei</div>
                    <div className="option green" onClick={() => {selectZap()
                    setContent(3)
                    setColor("green")
                    setCardClass("questionFinished green2")}}>Zap!</div>
                </div>
            </> 
            : 
            <>
                <h2>{questionNumber}</h2>
                { color === "red" ? <ion-icon name="close-circle"></ion-icon> : color === "yellow" ? <ion-icon name="help-circle"></ion-icon> : <ion-icon name="checkmark-circle"></ion-icon>}
            </>}

        </li>
    )
}