import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = ({ cart, addItem, remove, DecreaseItem, clearCart }) => {
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + item.discountPrice * item.Amount;
    }, 0);
  };

  const handleCheckout = () => {
    clearCart();
    navigate("/"); 
    toast.success("Thank You for Shopping With Us!",{
      position:"top-center"
    })
  };

  const handleClearCart = ()=>{
    clearCart();
    toast.success("Item is Remove",{
      position:"top-center"
    })
  }

  return (
    <div div className="a">
      <div className="Cart-Container">
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
          <h5 className="Action" onClick={handleClearCart}>
            Remove all
          </h5>
        </div>
        <div className="cart">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.Img} alt={item.Name} />
                <div>
                  <h3>{item.Name}</h3>
                  <p>
                    {item.Amount}* <i class="fa-solid fa-indian-rupee-sign"></i>
                    {item.discountPrice}
                  </p>
                </div>

                <div className="btnn">
                  <button onClick={() => DecreaseItem(item)} className="aaa">
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <button className="aaa">{item.Amount}</button>
                  <button onClick={() => addItem(item)} className="aaa">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                  <button onClick={() => remove(item.id)} className="aaa">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <hr />
        <div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total</div>
              <div className="items"></div>
            </div>
            <div className="total-amount">
              <p>
                <i class="fa-solid fa-indian-rupee-sign"></i>
                {getTotalPrice()}
              </p>
            </div>
          </div>
          <button className="button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
