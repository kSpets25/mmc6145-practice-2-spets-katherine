// App.js
import { useState } from 'react';
import './App.css'; // For styling


export default function App(){
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [total, setTotal] = useState(0);

  function calculateTotal() {
    setTotal (number1 + number2)

  function MyComponent({ stringValue }) {
      const numberValue = Number(stringValue); // Converts "05" to 5, "007" to 7
      return <div>{numberValue}</div>;
      }
 
  }
  return (
    <div>
        <h1>Adding Calculator</h1>
        <input
          placeholder="Number" //using in place of label 
          type="number"
          numberValue={number1}
          onChange={(e) => setNumber1(+e.target.value)}
          />
          <span> + </span>
          <input
          placeholder="Number" 
          type="number"
          numberValue={number2}
          onChange={(e) => setNumber2(+e.target.value)} 
          />
          <button onClick={calculateTotal}>Add Two Numbers</button>
          <p>Total: {total || ""}</p>
    </div>

  )
}




