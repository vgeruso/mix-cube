import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movements: ["F", "F2", "F'", "U", "U2", "U'", "R", "R2", "R'", "L", "L2", "L'", "B", "B2", "B'", "D", "D2", "D'"],
            mixFinal: ""
        }
    }

    movDraw() {
        const sizeMix = Math.floor(Math.random() * (20 - 10 + 1) + 10);
        const mix = [];
        let stringMoves = "";
        for(let i = 0; i < sizeMix; i++) {
            let movement = Math.floor(Math.random() * 18);
            mix[i] = this.state.movements[movement];
            stringMoves += " " + mix[i];
        }
        return this.setState({
            mixFinal: stringMoves
        });
    }

    render () {
        return (
            <div>
                <p>{this.state.mixFinal}</p>
                <button onClick={() => this.movDraw()}>MIX</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Board />,
    document.getElementById('root')
);