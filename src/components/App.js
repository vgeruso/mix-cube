import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/index.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movements: ["F", "F2", "F'", "U", "U2", "U'", "R", "R2", "R'", "L", "L2", "L'", "B", "B2", "B'", "D", "D2", "D'"],
            mixFinal: ""
        }
    }

    handleMoves() {
        const sizeMix = Math.floor(Math.random() * (30 - 20 + 1) + 20);
        const mix = [];
        let stringMoves = "";
        let lastMov = "";
        for(let i = 0; i < sizeMix; i++) {
            let movement = Math.floor(Math.random() * 18);
            let mov = this.state.movements[movement]
            if (lastMov[0] === mov[0]) {
                lastMov = mov;
            } else {
                mix[i] = mov;
                stringMoves += " " + mix[i];
                lastMov = mov;
            }
        }
        return this.setState({
            mixFinal: stringMoves
        });
    }

    render () {
        const mix = () => {
            if(this.state.mixFinal === "") {
                return (
                    <p className="p-mod">Press 'Mix' to show the move sequence</p>
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
                    {mix()}
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleMoves()}>Mix</button>
                </div>
            </div>
        );
    }
}