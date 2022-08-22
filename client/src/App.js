import './App.css';
import io from 'socket.io-client';
import { useEffect } from "react";

const socket = io("http://localhost:3001");

function App() {
  useEffect(() => {
    socket.on("alert", (text) => {
      alert(text);
    })
  }, [socket]);
  return (
    <div className="App">
      <input />
      <button onClick={() => {
        socket.emit('send_ping', "hello");
      }}>ping</button>
    </div>
  );
}

export default App;
