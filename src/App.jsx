import { useState } from "react";

import "./App.css";

function App() {
  // const random = Math.floor(Math.random() * 50);

  const [random, setRandom] = useState(() => generateRandomNum());
  function generateRandomNum(){
    return Math.floor(Math.random() * 50);
  }
  console.log(random);
  const [status, setStatus] = useState("Lets Begin");

  const [count, setCount] = useState(0);
  function handleSubmit() {

    
    const val = document.querySelector("#input").value;

    if (val > 50) {
      alert('You are going out of the box');
      window.location.reload();
    }

    if (val == random) {
      setStatus("You Guess IT");
      alert(`You guessed it in ${count+1} chances`);
      window.location.reload();
      
    }
    else if (val < random) {
      setStatus("Its too LOW");
      document.querySelector("#input").value="";
      
    } else {
      setStatus("Its too HIGH");
      document.querySelector("#input").value = "";
    }

    setCount(count+1);
  }

  function handleInputSubmit(event) {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <>
      <div>
        <h1>Guess The Number (0-50)</h1>

        <input
          type="number"
          inputMode="numeric"
          id="input"
          onKeyDown={handleInputSubmit}
        />
        <h2>Status : {status}</h2>
        <h2>Total Guesses: {count}</h2>
      </div>
    </>
  );
}

export default App;
