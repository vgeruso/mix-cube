import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
    render () {
        return (
            <div>
                <p>{/* TODO Array com as posições e misturas */}</p>
                <button onClick={() => this.mixCube()}>Mix</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Board />,
    document.getElementById('root')
);