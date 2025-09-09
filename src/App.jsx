// App.js
import { useState } from 'react';
import './App.css'; // For styling

//assignment limitations
//calculator only accept two numbers per operation.
//calculator will only have one operation available.


export default function App(){
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [total, setTotal] = useState(0);

 
  function calculateTotal() {
    setTotal (number1 + number2)
    
  }
  return (
    <div>
    <h1>Adding Calculator</h1>
    <input
      placeholder="First Number"
      type="number"
      value={number1}
      onChange={(e) => 
      setNumber1(+e.target.value)}
      />
      <span> + </span>
      <input
      placeholder="Second Number"
      type="number"
      value={number2}
      onChange={(e) => 
      setNumber2(+e.target.value)} 
      />
      <button onClick={calculateTotal}>Add Two Numbers</button>
      <p>Total: {total || ""}</p>
    </div>

  )
}




