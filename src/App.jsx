import { useEffect, useState } from "react";
import "./App.scss";
import Main from "./components/Main";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);
  const [shownum, setShownum] = useState(false);
  const [cartcount, setCartcount] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(count * 125);
    console.log(total);
  }, [count]);

  function Counter(value) {
    if (count + value < 0) return setCount(0);
    setCount((prev) => {
      return prev + value;
    });
  }

  function addToCart() {
    setShownum(true);
    setCartcount(count);
    setCount(0);
  }
  return (
    <>
      <Header cartcount={cartcount} total={total} shownum={shownum} />
      <Main count={count} addToCart={addToCart} Counter={Counter} />
    </>
  );
}

export default App;
