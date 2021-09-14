import { useState } from 'react';
import './App.css';
import OptionDropdown from './OptionDropdown';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0)

  function calculate(e) {
    e.preventDefault();
    let level = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let grams_left = grams - (burning * time);

    if (gender === 'male') {
      level = grams_left / (weight * 0.7);
    }
    else {
      level = grams_left / (weight * 0.6);
    }
    if (level < 0) {
      level = 0;
    }
    setResult(level)
  }

  return (
    <>
      <div id="container">
        <form onSubmit={calculate}>
          <h3>Calculating alcohol blood level</h3>
          <div>
            <label>Weight</label><br />
            <input name="weight" type="number" step="1" value={weight}
              onChange={e => setWeight(e.target.value)} ></input>
          </div>

          <div>
            <label>Bottles</label><br />
            <select name="bottles" type="number" step="1" value={bottles}
              onChange={e => setBottles(e.target.value)} >
                <OptionDropdown />
            </select>
          </div>
          <div>
            <label>Time</label><br />
            <select name="time" type="number" step="1" value={time}
              onChange={e => setTime(e.target.value)} >
                <OptionDropdown />
            </select>
          </div>
          <div>
            <label>Gender</label><br />
            <input type="radio" name="gender" value="male"
              defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label><br />
            <input type="radio" name="gender" value="female"
              onChange={e => setGender(e.target.value)} /><label>Female</label>
          </div>
          <div>
            <label>Alcohol level</label><br />
            <output>{result.toFixed(1)}</output>
          </div>
          <div>
            <button>Calculate</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;