import React from 'react';
import './App.css';
import Header from './components/Header';
import Display from './components/Display';
import CalcButton from './components/CalcButton';

function App() {
  const [total, setTotal] = React.useState(0);
  const [newNum, setNewNum] = React.useState(0);

  function handleChange(e) {
    setNewNum(e.target.value)
  }

  function doOperation(e) {

   
   switch(e.target.dataset.operation) {
    case "+":
      console.log("data ", newNum, e.target.dataset.operation, total);
      // const output = Number(total) + Number(newNum);
      setTotal( Number(total) + Number(newNum) );
      break;
    case "-":
      setTotal( Number(total) - Number(newNum) );
      break;
    case "*":
      setTotal( Number(total) * Number(newNum) );
      break;
    case "/":
      setTotal( Number(total) / Number(newNum) );
      break;
    default:
      break;
   }
  
  }

  return (
    <div className="App">
      <Header />
      <Display amount={total} />
      <div className="input">
        <input type="text" value={newNum} onChange={handleChange} />
      </div>
      <CalcButton operation="+" clickFunc={doOperation} operationName="add" />
      <CalcButton operation="-" clickFunc={doOperation} operationName="subtract" />
      <CalcButton operation="*" clickFunc={doOperation} operationName="multiply" />
      <CalcButton operation="/" clickFunc={doOperation} operationName="divide" />
      <button style={{background: "#F68181"}}  onClick={() => setNewNum(0)} type="button">Reset Input</button>
      <button style={{background: "#F68181"}} onClick={() => setTotal(0)} type="button">Reset Result</button>
    </div>
  );
}

export default App;
