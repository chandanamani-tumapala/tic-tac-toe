import React , {useState } from 'react';
import Board from './Board';
import './App.css';

const Game =() => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXnext, setIsXNext] = useState(true);
    const handleClick = (i) => {
        const newBoard = [...board] ;
        if(calculateWinner(newBoard) || newBoard[i]) 
            return ;
        newBoard[i] =isXnext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXnext);
    };
    const result = calculateWinner(board);
    const winner =result ? result.winner: null;
    const winningLine = result?result.line: [];
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };
    return (
        <div className='game'>
            <h1>TIC-TAC-TOE</h1>
            <Board squares={board} onClick={handleClick} winningLine={winningLine}/>
            <div className='info'>
                {winner ? `Player ${winner} won!` : `Next Player : ${isXnext ? 'X' : 'O'}`}
            </div>
            <button className='reset-btn' onClick={resetGame}>
                RESET
            </button>
        </div>
    );
};

const calculateWinner= (squares) => {
    const lines = [ [0, 1, 2] , [3, 4, 5] , [6, 7, 8], [0,3,6] ,[1,4,7] , [2,5,8] , [0,4,8] , [2,4,6] ];
    for (let i =0; i<lines.length; i++) {
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return{winner: squares[a], line: lines[i]};
        }
    }
    return null; 
}

export default Game;    