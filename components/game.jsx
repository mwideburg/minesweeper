import React from 'react';
// debugger
import * as Minesweeper from '../minesweeper.js';
// debugger
import Board from './board';


class Game extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            gridSize: 15,
            numBombs: 30,
            board: new Minesweeper.Board(15, 30)
        }
        
        this.updateGame = this.updateGame.bind(this);
        // this.restartGame = this.restartGame.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.getGridNum = this.getGridNum.bind(this);
        this.getNumBombs = this.getNumBombs.bind(this);
    }
    getGridNum(e){
        e.preventDefault()
        const num = e.target.value ? parseInt(e.target.value) : 15
        // debugger
        this.setState({ gridSize: num })
    }
    getNumBombs(e){
        e.preventDefault()
        const numBombs = e.target.value ? parseInt(e.target.value) : 30
        this.setState({numBombs: numBombs})
    }


    resetGame(e) {
        e.preventDefault();
        const gridSize = this.state.gridSize;
        const numBombs = this.state.numBombs;
        // debugger
        this.setState({ board: new Minesweeper.Board(gridSize, numBombs) });
        document.getElementById("modal").classList.remove('isOpen');
    }

    checkWin(tile) {
        if (this.state.board.lost()) {
            // alert("YOU HAVE LOST");
            // this.setState({board: new Minesweeper.Board(5,3)});
            document.getElementById("modal").classList.add('isOpen');
        } else if (this.state.board.won()) {
            // alert("YOU HAVE WON");
            document.getElementById("modal").classList.add('isOpen');
        }
    }


    updateGame(tile, flag) {
        if (flag) {
            tile.toggleFlag();
        } else if (!tile.glagged){
            tile.explore();
            // debugger
            // tile.reveal();
        }
        // debugger
        this.setState({ board: this.state.board }, this.checkWin.bind(this))
    }

    render() {
        return (
            <>
            <div className="title">
                <h1> MINESWEEPER</h1>
                <p> 
                Click to explore a tile.
                Alt + click to flag a tile.
                </p>
                <p>Flag all the bombs and explore all the safe territory to win!</p>
            </div>
            <form className="title">
                <label>Grid Size </label>
                <input type="number" value={this.state.gridSize} name="gridSize" onChange={this.getGridNum}/>
                <label> Number of Bombs </label>
                    <input type="number" value={this.state.numBombs} name="numBombs" onChange={this.getNumBombs}/>
                    <button onClick={this.resetGame}> New Game </button>
            </form>
            <br />
            <Board board={this.state.board} updateGame={this.updateGame}/>
            <div id="modal">
                <div className="modal-screen">
                </div>
                <div className="modal-form">
                    <h1>{this.state.board.won() ? "YOU WON!" : "YOU LOST!"}</h1>
                    <h2>Would you like to play again?</h2>
                    <button onClick={this.resetGame}>Reset Game</button>
                </div>
            </div>
            <p className="title">Created by Nick Draper and Michael Wideburg</p>
            </>
        )
    }
}

export default Game;