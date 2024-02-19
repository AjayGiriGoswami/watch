import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Main from "./Components/Pages/Main";
import Cart from "./Components/Cart/Cart";
import Navbars from "./Components/Navbar/Navbar";
import products from "./Components/Pages/Api";
import Footer from "./Components/Footer/Footer";
import Signup from "./Components/Login/Signup";
import Forgot from "./Components/Login/Forgot";

const App = () => {
  const [cart, setcart] = useState([]);
  const [show, setshow] = useState(false);
  const [MenuData, setMenuData] = useState(products);
    console.log(MenuData);

    const filteritem = (Categories) => {
      const updatelist = products.filter((curElem) => {
        return curElem.Categories === Categories;
      });
      setMenuData(updatelist);  
    };

  const handleitem = (item) => {
    let present = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        present = true;
        alert("Already Add in Cart");
        return;
      }
    });
    if (present) return;
    setcart([...cart, item]);
  };

  const remove = (id) => {
    setcart(cart.filter((x) => x.id !== id));
  };

  const addItem = (item) => {
    const existItem = cart.find((x) => x.id === item.id);
    if (existItem) {
      setcart(
        cart.map((x) => (x.id === item.id ? { ...x, Amount: x.Amount + 1 } : x))
      );
    } else {
      setcart([...cart, { ...item, Amount: 1 }]);
    }
  };

  const DecreaseItem = (item) => {
    const updatedCart = cart.map((x) =>
      x.id === item.id
        ? { ...x, Amount: x.Amount > 1 ? x.Amount - 1 : x.Amount }
        : x
    );
    setcart(updatedCart);
  };

  const clearCart = () => {
    setcart([]);
  };
  return (
    <div>
      <Navbars size={cart.length} setshow={setshow} filteritem={filteritem} />
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Forgot" element={<Forgot/>} />
      </Routes>
      {show ? (
        <Cart
          cart={cart}
          remove={remove}
          addItem={addItem}
          DecreaseItem={DecreaseItem}
          clearCart={clearCart}
        />
      ) : (
        <Main handleitem={handleitem} />
      )}
      <Footer/>
    </div>
  );
};

export default App;
