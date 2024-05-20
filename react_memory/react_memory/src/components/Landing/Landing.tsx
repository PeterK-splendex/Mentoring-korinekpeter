import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import memorySlice from '../../Slice/MemorySlice';
import { useNavigate } from 'react-router-dom';
import { MemoryState } from '../../Slice/MemorySlice.types';

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { numCards} = useSelector((state: { memory: MemoryState }) => state.memory);
  const handleStartGame = () => {
    dispatch(memorySlice.actions.setNumCards(numCards));
    dispatch(memorySlice.actions.startGame());
    navigate('/game');
  };

  return (
    <div className="landing-page">
      <h1>Splendex Memory Game</h1>
      <label>
        Deck Size
        <select value={numCards} onChange={(e) => dispatch(memorySlice.actions.setNumCards(Number(e.target.value)))}>
          {[...Array(8)].map((_, index) => {
            const pairs = (index + 3) * 2;
            return (
              <option key={index} value={pairs}>
                {pairs}
              </option>
            );
          })}
        </select>

      </label>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default LandingPage;
