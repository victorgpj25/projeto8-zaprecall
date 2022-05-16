import party from './img/party.png'
import sad from './img/sad.png'

export default function Footer ({counter, failsCounter, progressIcons}) {


    return (
        <footer>
            <div className="result">
                {counter !== 8 ? null : failsCounter == 0 ? <img src={party} alt="party" /> : <img src={sad} alt="sad" />}
                <h1>{counter !== 8 ? null : failsCounter == 0 ? "Parabéns" : "Putz..."}</h1>
            </div>
                <p className="resultText">{counter !== 8 ? null : failsCounter == 0 ? "Você não esqueceu de nenhum flashcard!" : "Ainda faltam alguns...Mas não desanime!"}</p>
                <p className="counter"> {counter}/8 CONCLUÍDOS</p>
                <div className="progress">
                    {progressIcons.map(icon => icon)}
                </div>
        </footer>
    )
}