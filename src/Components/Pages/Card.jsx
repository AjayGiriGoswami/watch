import React from "react";
import "./Card.css";

const Cards = ({ item, handleitem }) => {
  const { Categories, Name, Price, Img, discountPrice } = item;

  const discountPercentage = Math.round(
    ((Price - discountPrice) / Price) * 100
  );

  return (
    <div className="box">
      <div className="card">

        <div className="image">
          <img src={Img} alt="" />
        </div>

        <div className="products_text">
          <h2>{Categories}</h2>
          <strong>{Name}</strong>
          <div class="card-price">
            <span>Price <i class="fa-solid fa-indian-rupee-sign"></i>{discountPrice}</span> &nbsp;
            <span class="strike"><i class="fa-solid fa-indian-rupee-sign"></i> {Price}</span> &nbsp;
            <span className="discount"> ({discountPercentage}% Off)</span>
          </div>

          
          <button className="btn" onClick={() => handleitem(item)}>
            Add to Cart <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
