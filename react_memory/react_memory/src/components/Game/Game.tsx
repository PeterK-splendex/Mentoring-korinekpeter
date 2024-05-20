import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, MemoryState } from '../../Slice/MemorySlice.types';
import memorySlice from '../../Slice/MemorySlice';
import angularImage from './cards/angular.png';
import d3Image from './cards/d3.png';
import jenkinsImage from './cards/jenkins.png';
import postcssImage from './cards/postcss.png';
import reactImage from './cards/react.png';
import reduxImage from './cards/redux.png';
import sassImage from './cards/sass.png';
import splendexImage from './cards/splendex.png';
import tsImage from './cards/ts.png';
import webpackImage from './cards/webpack.png';
import cardback from "./cards/back.png";
import { useNavigate } from 'react-router-dom';

const images = [
  angularImage,
  d3Image,
  jenkinsImage,
  postcssImage,
  reactImage,
  reduxImage,
  sassImage,
  splendexImage,
  tsImage,
  webpackImage
];

const Game = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { numCards, cards ,steps, gameEnded, coverUp } = useSelector((state: { memory: MemoryState }) => state.memory);

  useEffect(() => {
    dispatch(memorySlice.actions.startGame());
  }, []);

  const renderCardsGrid = () => {
    const grid = [];
    let columns, rows;
    if (numCards <= 10 || numCards === 14) {
      rows = 2;
      columns = numCards / rows;
    } else if (numCards === 12 || numCards === 18) {
      rows = 3;
      columns = numCards / rows;
    } else {
      rows = 4;
      columns = numCards / rows;
    }
  
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        const index = i * columns + j;
        if (index < numCards) {
          row.push(
            <td key={index}>
              {cards[index].isMatched ? "" : renderCard(cards[index])}
            </td>
          );
        } else {
          row.push(<td key={index}></td>);
        }
      }
      grid.push(<tr key={i}>{row}</tr>);
    }
  
    return grid;
  };
  
  
  const renderCard = (card: Card) => {
    const handleCardClick = () => {
      dispatch(memorySlice.actions.flipCard(card.id));
      if (!coverUp) {
        setTimeout(() => {
          dispatch(memorySlice.actions.cover());
        }, 500);
      }
    };
  
    return (
      <img
        src={card.isFlipped ? images[card.image] : cardback}
        alt={card.isFlipped ? `Card ${card.id}` : "Card Back"}
        onClick={handleCardClick}
      />
    );
  };

  const HandleReset = () => {
    dispatch(memorySlice.actions.startGame());
  }

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="game">
      <table>
        <tbody>
          {renderCardsGrid()}
        </tbody>
      </table>
      {gameEnded && <div className="game-over">Congratulations, you've matched all the cards!</div>}
      <div>{steps}</div>
      <div> <button onClick={HandleReset}>New game</button></div>
      <div><button onClick={handleBack}>Back</button></div>
    </div>
  );
};

export default Game;
