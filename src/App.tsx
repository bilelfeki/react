import { useState } from "react";
import ResponsiveAppBar from "./components/Nav-bar";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>hello bb{count}</div>
      <button onClick={handleClick}>hello</button>
      <div>
        <ResponsiveAppBar />
      </div>
    </>
  );
}

export default App;
