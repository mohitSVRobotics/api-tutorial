import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';

function App() {
  const targetCurr = "CAD";
  const [baseCurr, setBaseCurr] = useState("USD");
  const [exRate, setExRates] = useState(1);
  const [curValue ,setCurValue] = useState(0);

  useEffect(() => {
    let apiKey = "e2b002445a7e145d0d18571a";
    let request = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurr}/${targetCurr}`;
    fetch(request)
    .then(res => res.json())
    .then(res => {
      setExRates(res.conversion_rate);
    })
  }, [baseCurr])

  const onBaseChange = (event) => {
    setBaseCurr(event.target.value);
  }

  const onValChange = (event) => {
    setCurValue(event.target.value);
  };

  return (
    <div>
      <h4>Base currency: {baseCurr}</h4>
      <input type="text" value={baseCurr} onChange={onBaseChange}></input>
      <input type="text" value={curValue} onChange={onValChange}></input>
      <h4>{curValue} {baseCurr} is equal to {curValue * exRate} {targetCurr}</h4>
    </div>
  );
}

export default App;
