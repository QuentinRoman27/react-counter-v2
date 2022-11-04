import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = (click) => {
    if (click === "less") {
      setCounter(counter - 1);
    } else if (click === "more") {
      setCounter(counter + 1);
    } else if (click === "reset") {
      setCounter(0);
    }
  };

  const [tabCounter, setTabCounter] = useState([0]);

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            const newTabCounter = [...tabCounter];

            newTabCounter.push(0);
            setTabCounter(newTabCounter);
          }}
        >
          Add Counter
        </button>
      </div>
      <div className="buttons-container">
        <button
          onClick={() => {
            handleClick("less");
          }}
        >
          -
        </button>

        <span>{counter}</span>

        <button
          onClick={() => {
            handleClick("more");
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          handleClick("reset");
        }}
        className="reset"
      >
        Reset
      </button>

      {/* deuxieme pavé
       */}

      <div className={tabCounter.length > 1 ? "" : "hide"}>
        <div className="buttons-container">
          <button
            onClick={() => {
              const newTabCounter = [...tabCounter];

              newTabCounter[1]--;
              setTabCounter(newTabCounter);
            }}
          >
            -
          </button>

          <span>{tabCounter[1]}</span>

          <button
            onClick={() => {
              const newTabCounter = [...tabCounter];

              newTabCounter[1]++;
              setTabCounter(newTabCounter);
            }}
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            const newTabCounter = [...tabCounter];

            newTabCounter[1] = 0;
            setTabCounter(newTabCounter);
          }}
          className="reset"
        >
          Reset
        </button>
        <div className={tabCounter.length > 2 ? null : "hide"}>
          <div className="buttons-container">
            <button
              onClick={() => {
                const newTabCounter = [...tabCounter];

                newTabCounter[2]--;
                setTabCounter(newTabCounter);
              }}
            >
              -
            </button>

            <span>{tabCounter[2]}</span>

            <button
              onClick={() => {
                const newTabCounter = [...tabCounter];

                newTabCounter[2]++;
                setTabCounter(newTabCounter);
              }}
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              const newTabCounter = [...tabCounter];

              newTabCounter[2] = 0;
              setTabCounter(newTabCounter);
            }}
            className="reset"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
