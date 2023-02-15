import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/jeanaica`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }

  return <h1>Data</h1>;
}

export default App;
