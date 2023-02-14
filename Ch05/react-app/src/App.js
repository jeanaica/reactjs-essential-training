import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#00000');

  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle('');
    setColor('#00000');
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        type='text'
        placeholder='color title'
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        value={color}
        type='color'
        onChange={(e) => setColor(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
