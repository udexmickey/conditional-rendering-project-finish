import React from 'react'
import './App.css';

const Card = props => {
    return (
        
            <div className="card">
                <img src={props.avatar} alt="Avatar" style={{ width: '100%' }} />
                <div className="container">
                    <h4><b>{props.name}</b></h4>
                    <p>{props.title}</p>
                    <div>{props.children}</div>
                    <button onClick={props.onDelete} className="button button2">Card Delete</button>
                </div>
            </div>

    )
}

export default Card
