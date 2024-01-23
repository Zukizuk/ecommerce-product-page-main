import { useState } from "react";
import "./App.scss";
import Main from "./components/Main";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  function Counter(value) {
    if (count + value < 0) return setCount(0);
    setCount((prev) => {
      return prev + value;
    });
  }
  return (
    <>
      <Header count={count} />
      <Main count={count} Counter={Counter} />
    </>
  );
}

export default App;
