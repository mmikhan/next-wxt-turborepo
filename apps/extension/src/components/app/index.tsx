import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import wxtLogo from "/wxt.svg";
import "./style.css";
import { Button } from "@workspace/ui/components/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://wxt.dev" rel="noreferrer" target="_blank">
          <img
            alt="WXT logo"
            className="logo"
            height="100"
            src={wxtLogo}
            width="100"
          />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img
            alt="React logo"
            className="logo react"
            height="100"
            src={reactLogo}
            width="100"
          />
        </a>
      </div>
      <h1 className="font-bold text-3xl text-amber-300 underline">
        WXT + React
      </h1>
      <div className="card">
        <Button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          type="button"
          variant="destructive"
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the WXT and React logos to learn more
      </p>
    </>
  );
}

export default App;
