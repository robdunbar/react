import React from 'react';
import { Board } from './Board';

export class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isNextPlayerX: true,
            winHistory: ['X'],
            squares: Array(9).fill(null)
        }
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    handleClick(i) {
        //if (calculateWinner(this.state.squares) != null || this.state.squares[i] != null)
        if (this.calculateWinner(this.state.squares) || this.state.squares[i]) {
            return;
        }

        const squares = this.state.squares.slice();
        const winHistory = this.state.winHistory.slice();

        squares[i] = this.state.isNextPlayerX ? 'X' : 'O';
        const winner = this.calculateWinner(squares);
        if (winner) {
            winHistory.push(winner);
        }

        this.setState({
            squares: squares,
            winHistory: winHistory,
            isNextPlayerX: !this.state.isNextPlayerX
        });
    }

    playAgain(){
        const winHistory = this.state.winHistory.slice();

        this.setState({
            squares: Array(9).fill(null),
            winHistory: winHistory,
            isNextPlayerX: this.state.isNextPlayerX
        });
    }

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner is player: ' + winner;
        }
        else {
            status = 'Next player: ' + (this.state.isNextPlayerX ? 'X' : 'O');
        }

        const xWins = this.state.winHistory.filter(h => h === 'X').length;
        const oWins = this.state.winHistory.filter(h => h === 'O').length;
        const resultHistory = `X ${xWins}  vs  O ${oWins}`;

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.state.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={()=>this.playAgain()}>Play Again</button>
                    <div>Results</div>
                    <ol>{resultHistory}</ol>
                </div>
            </div>);
    }
}