export default function Main() {
  return (
    <main>
      <div className="gallery">
        <div className="big"></div>
        <div className="small"></div>
      </div>
      <div className="text__container">
        <h1>Sneaker Company</h1>
        <h2> Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price__container">
          <div className="current-price__container">
            <p>
              $125.00
              <span className="discount">50%</span>
            </p>
          </div>
          <span>$250.00</span>
        </div>
        <div className="bottom">
          <div className="number">
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>
      </div>
    </main>
  );
}
