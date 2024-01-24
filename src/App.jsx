import { useState } from "react";
import "./App.scss";
import Main from "./components/Main";
import Header from "./components/header";
import Lightbox from "./components/Lightbox";

function App() {
  const [count, setCount] = useState(0);
  const [shownum, setShownum] = useState(false);
  const [cartcount, setCartcount] = useState(false);
  const [total, setTotal] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  function Counter(value) {
    if (count + value < 0) return setCount(0);
    setCount((prev) => {
      return prev + value;
    });
  }
  const deleteTotal = () => {
    setTotal(0);
    setCartcount(0);
  };

  function addToCart() {
    setCartcount(count);
    setShownum(true);
    setTotal(count * 125);
    // setCount(0);
  }
  return (
    <>
      <Header
        cartcount={cartcount}
        total={total}
        shownum={shownum}
        deleteTotal={deleteTotal}
      />
      {showLightbox && <Lightbox setShowLightbox={setShowLightbox} />}
      <Main
        count={count}
        addToCart={addToCart}
        Counter={Counter}
        setShowLightbox={setShowLightbox}
      />
    </>
  );
}

export default App;
