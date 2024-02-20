// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.jsx';
import io from 'socket.io-client';
import './index.css';

const socket = io('http://localhost:8080'); // Replace with your server address

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App socket={socket} />
  </React.StrictMode>
);
