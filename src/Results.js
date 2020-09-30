import React from 'react';

const Results = (props) => {
    return (
        <div className="results">
        <div className="results-best">Najlepszy wynik: <span style={{fontWeight: "bold"}}>{props.bestResult}</span></div>
    {/* <h3 className="results-start">{props.start ? null : <span>NACIŚNIJ STRZAŁKĘ W PRAWO BY ZACZĄĆ</span>}</h3> */}
    <div className="results-start">{props.startTitle}</div>
        <div className="results-games">Liczba gier: <span style={{fontWeight: "bold"}}>{props.numberOfGames}</span></div>
        </div>
    )
}

export default Results;