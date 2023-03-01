import React from "react";
import "./Global.css";
import products from 'LoginPageMFE/products'
import useMfeStore from 'LoginPageMFE/useMfeStore'




const BuyCard = () => {
  const addToCart = useMfeStore(state => state.addToCart)
  return (
    <>
      <section className="main-card--cointainer">
        {products?.map((curElem, i) => {
          const { id, productName, productImg, description } = curElem;
          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-author subtle">{description}</span>
                  <h2 className="card-title">{productName}</h2>
                  <img src={productImg} alt="Dosa" className="card-media" />
                  <button
                    className="card-tag subtle"
                    onClick={() => addToCart(curElem)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default BuyCard;
