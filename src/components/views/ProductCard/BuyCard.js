import React from "react";
import "./Global.css";
import products from 'LoginPageMFE/products'
import useMfeStore from 'LoginPageMFE/useMfeStore'




const BuyCard = () => {
  const addToCart = useMfeStore(state => state.addToCart)
  const redirect = (link) => {
    window.location.href = link
  }
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
                    style={{backgroundColor:'#3BB77E',color:'white',borderRadius:'15px'}}
                    className="card-tag subtle"
                    onClick={() => addToCart(curElem)}
                  >
                    Add to Cart
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
