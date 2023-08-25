import React, { useState } from 'react';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const IndexPage = () => {
  const [movements, _] = useState([
    'F',
    'F2',
    "F'",
    'U',
    'U2',
    "U'",
    'R',
    'R2',
    "R'",
    'L',
    'L2',
    "L'",
    'B',
    'B2',
    "B'",
    'D',
    'D2',
    "D'",
  ]);
  const [mixFinal, setMixFinal] = useState('');

  const movDraw = () => {
    const sizeMix = Math.floor(Math.random() * (25 - 15 + 1) + 15);
    const mix = [];
    let stringMoves = '';
    for (let i = 0; i < sizeMix; i++) {
      let movement = Math.floor(Math.random() * 18);
      mix[i] = movements[movement];
      stringMoves += ' ' + mix[i];
    }
    setMixFinal(stringMoves);
  };

  const mix = () => {
    if (mixFinal === '') {
      return <p>{`Press 'Mix' to draw the mix sequence`}</p>;
    } else {
      return <p>{mixFinal}</p>;
    }
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <div>{mix()}</div>
        <div>
          <button type='button' onClick={() => movDraw()}>
            Mix
          </button>
          <p></p>
          <button type='button' onClick={() => setMixFinal('')}>
            Clear
          </button>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Mix Cube</title>;
