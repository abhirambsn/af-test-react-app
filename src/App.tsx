import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  function persistData() {
    localStorage.setItem("name", name);
    localStorage.setItem("count", count.toString());
  }

  function loadData() {
    const storedName = localStorage.getItem("name");
    const storedCount = localStorage.getItem("count");

    if (storedName) {
      setName(storedName);
    }
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }

  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount(0);
  }

  function setNameHandler() {
    const newName = prompt("Enter a new name:");
    if (newName) {
      setName(newName);
    }
  }

  function clearData() {
    localStorage.removeItem("name");
    localStorage.removeItem("count");
    setName("");
    setCount(0);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1>Test React Website for Autoflow generation</h1>
      <p>
        <span>Name: </span>
        <span>{name}</span>
        <br />
        <span>Count: </span>
        <span>{count}</span>
      </p>

      <div className="flex-row-container">
        <button onClick={incrementCount}>Increase Count</button>
        <button onClick={decrementCount}>Decrease Count</button>
        <button onClick={resetCount}>Reset Count</button>
        <button onClick={setNameHandler}>Set Name</button>
        <button onClick={clearData}>Clear Data</button>
        <button onClick={persistData}>Persist Data</button>
      </div>
    </>
  );
}

export default App;
