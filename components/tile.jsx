import React from 'react';
import Minesweeper from '../minesweeper';

class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.getBombCount = this.getBombCount.bind(this);
        this.getContent = this.getContent.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.reveal = this.reveal.bind(this);
    }

    getBombCount(){
        return this.props.tile.bombCount();
    }

    getContent() {
        if (this.props.tile.flagged) {
            return "🚩"
        } else if (this.props.tile.explored) {
            return this.props.tile.bombed ? "💣" : this.props.tile.adjacentBombCount();
        }

        // let content = "";
        // if (this.state.isBombed) {
        //     content = "💣";
        //     // return "tile bombed"
        // } else if (this.state.isFlagged) {
        //     content = "🚩";
            
        // } else if (this.state.isExplored) {
        //     const count = this.props.tile.adjacentBombCount();
        //     content = count;
        //     // return "tile isExplored"
        // }
        // return content;
    }
    
    // reveal(){
    //     let content = "";
    //     if (this.props.explored) {
    //         const count = this.props.tile.adjacentBombCount();
    //         content = count === 0 ? "" : count;
    //     }
    //     this.setState({content: content});
    // }



    handleClick(e) {
        // if (e.altKey) {
        //     console.log("Alt Key was pressed during click")
        //     // debugger
        //     const isFlagged = this.state.isFlagged ? false : true;
        //     const content = isFlagged ? "🚩" : " ";
        //     this.setState({ isFlagged: isFlagged, content: content });
        // } else {
        //     console.log("normal click");
        //     this.setState({ isExplored: true });
        //     this.reveal(e);
        // }
        this.props.updateGame(this.props.tile, e.altKey);
        // debugger
        
        
        // debugger
    }

    render () {
        // debugger
        // if (this.props.tile.explored) {
        //     this.reveal();
        // }
        
            return (
                <div className="tile" content={this.getContent()} onClick={this.handleClick} reveal={this.props.tile.explored.toString()}>
                    {this.getContent()}
                </div>
            )
    }
}

export default Tile;