import { useEffect, useState } from "react";
import "./App.css";
import Practice from "./Practice3";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup3 from "./Signup3";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

function App() {
  const [data, setData] = useState({ products: [], cart: [] });

  useEffect(() => {
    let fetchData = async (url) => {
      let response = await fetch(url);
      let dataGotten = await response.json();
      console.log(dataGotten);
      setData({ ...data, products: dataGotten });
    };
    fetchData("https://fakestoreapi.com/products");
  }, []);

  let addToCart = (product) => {

    let existingItem=data.cart.find((item)=>item.id==product.id);
    console.log(existingItem);

    if(existingItem){
      let tempProduct={...product,quantity:existingItem.quantity+ 1 };
      let fit=data.cart.filter((each)=>tempProduct.id!==each.id);
      let tempCart=[...fit,tempProduct];
      setData({...data,cart:tempCart});
    }
    else{
      let tempProduct={...product,quantity:1};
      setData({...data,cart:[...data.cart,tempProduct]});
      console.log('this runs first');
    }


  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart={data.cart}/>
        <Routes>
          <Route path="/" element={<Home products={data.products} addToCart={addToCart}/>} />
          <Route path="/cart" element={<Cart  cartItems={data.cart} />} />
        </Routes>
      </BrowserRouter>

      {/* <Signup3 /> */}
      {/* <Home />  */}
      {/* <Cart />  */}
     { <practice />}
    </div>
  );
}

export default App;
