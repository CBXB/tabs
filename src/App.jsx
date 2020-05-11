import React, {useState} from 'react';
import './App.css';

function App() {
  let message1 = "message 1"
  let message2 = "message 2"
  let message3 = "message 3"
  const [content, setContent] = useState([message1, message2, message3]);
  const [idx, setIdx] = useState(0);
  const handleClick = (e, id) => {setIdx(id);}

  return (
    <div className="App">
      <button className="m-4" onClick={e => handleClick(e, 0)}>Tab1</button>
      <button className="m-4" onClick={e => handleClick(e, 1)}>Tab2</button>
      <button className="m-4" onClick={e => handleClick(e, 2)}>Tab3</button>
      <p>{content[idx]}</p>
    </div>
  );
}

export default App;
