// src/App.jsx
import { useState, useEffect } from 'react';
import { react as reactLogo } from './assets/react.svg';
import viteLogo from './vite.svg';
import './App.css';

function App({ socket }) {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('message', (data) => {
      setMessage(data);
    });
    return () => {
      socket.off('message');
    };
  }, [socket]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    socket.emit('buttonClicked', 'Clicked!');
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>{message}</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
