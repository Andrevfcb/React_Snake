import React, { Component } from 'react';


const Snake = (props) => {
    return (
    props.snakeDot.map((dot, i) => {
        return (
            <div className="snake-dot" key={i} style={{left:`${dot[0]}%`, top:`${dot[1]}%`}}>
            </div>
        )
    }))
}


export default Snake;