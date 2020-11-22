import React from 'react';

const Results = (props) => {
    return (
        <div className="results">
        <div className="results-best">Best score: <span style={{fontWeight: "bold"}}>{props.bestResult}</span></div>
    <div className="results-start">{props.startTitle}</div>
        <div className="results-games">Games: <span style={{fontWeight: "bold"}}>{props.numberOfGames}</span></div>
        </div>
    )
}

export default Results;