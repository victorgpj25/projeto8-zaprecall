import React from "react"

import Card from './Card.js'

function randomizer() { 
    return Math.random() - 0.5; 
}

let deck = [{q: "O que é JSX?", a: "Uma extensão de linguagem do JavaScript" }, {q: "O React é __", a: "uma biblioteca JavaScript para construção de interfaces" }, {q: "Componentes devem iniciar com __", a: "letra maiúscula" }, {q: "Podemos colocar __ dentro do JSX", a: "expressões" }, {q: "O ReactDOM nos ajuda __", a: "interagindo com a DOM para colocar componentes React na mesma" }, {q: "Usamos o npm para __", a: "gerenciar os pacotes necessários e suas dependências" }, {q: "Usamos props para __", a: "passar diferentes informações para componentes" }, {q: "Usamos estado (state) para __", a: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }]
deck = deck.sort(randomizer)



export default function Deck ({selectZap, selectAlmost, selectNot}) {


    const questionsBox = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"]

    const deckDisplay = questionsBox.map((text, index) => <Card index={index} questionNumber={questionsBox[index]} question={deck[index].q} answer={deck[index].a} selectZap={selectZap} selectAlmost={selectAlmost} selectNot={selectNot} />)
    
    return (
        <ol>
            {deckDisplay}
        </ol>
    )
}