import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movements: ["F", "F2", "F'", "U", "U2", "U'", "R", "R2", "R'", "L", "L2", "L'", "B", "B2", "B'", "D", "D2", "D'"],
            mixFinal: ""
        }
    }

    movDraw() {
        const sizeMix = Math.floor(Math.random() * (25 - 15 + 1) + 15);
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
        const mix = () => {
            if(this.state.mixFinal === "") {
                return (
                    <p className="p-mod">"Press 'Mix' to draw the mix sequence"</p>
                );
            } else {
                return (
                    <p>{this.state.mixFinal}</p>
                );
            }
        };

        return (
            <div className="card" id="cardMix">
                <div className="card-body">
                    <div>{mix()}</div>
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.movDraw()}>Mix</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Board />,
    document.getElementById('root')
);