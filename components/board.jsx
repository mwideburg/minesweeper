import React from 'react';
import Minesweeper from '../minesweeper';
import Tile from './tile';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rows = this.props.board.grid.map((row, idx_y) =>{
            return <div key={idx_y} className="row" row_idx={idx_y}>
                {row.map((col, idx_x) =>{
                    return <Tile key={idx_x} pos={[idx_y, idx_x]} tile={this.props.board.grid[idx_y][idx_x]} updateGame={this.props.updateGame}/>
                })}
            </div>
        })
        return(
            <div className="board">
                {rows}
            </div>
        )
    }
}

export default Board;