import React from 'react';
import './App.css';

const Square = ({value, onClick , isWinning}) => {
        return ( 
            <button className={`square ${isWinning ? 'winning' : ''} `} onClick={onClick}>{value}</button>
        )
    };

const Board = ({squares , onClick,winningLine}) => {
    return (
        <div className='board'>
            {squares.map((square,i) => (
                <Square key={i} value = {square} onClick= {()=>onClick(i)} isWinning = {winningLine.includes(i)}/>
            ))}
        </div>
    );
}
export default Board;