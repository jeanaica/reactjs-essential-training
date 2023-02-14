import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // via array destructuring
  const [emotion, setEmotion] = useState('happy');

  useEffect(
    () => {
      console.log(`It's ${emotion} right now`);
    },
    // dependency array
    []
  );

  return (
    <div className='App'>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion('sad')}>Sad</button>
      <button onClick={() => setEmotion('excited')}>Excited</button>
    </div>
  );
}

export default App;
