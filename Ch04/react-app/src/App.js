import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // via array destructuring
  const [emotion, setEmotion] = useState('happy');
  const [secondaryEmotion, setSecondaryEmotion] = useState('tired');

  useEffect(
    () => {
      console.log(`It's ${emotion} around here!`);
    },
    // dependency array
    [emotion, secondaryEmotion]
  );

  useEffect(
    () => {
      console.log(`It's ${secondaryEmotion} around here!`);
    },
    // dependency array
    [secondaryEmotion]
  );

  return (
    <div className='App'>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion('sad')}>Sad</button>
      <button onClick={() => setEmotion('excited')}>Excited</button>

      <h2>Current secondary emotion is {secondaryEmotion}</h2>
      <button onClick={() => setSecondaryEmotion('grateful')}>Grateful</button>
    </div>
  );
}

export default App;
