import React from "react";
import '../Styles/Cart.css'
const Cart = ({ cartItems }) => {
  let increaseCount=({cartItems})=>{
    
  }
  return (
    <div>
      {cartItems.map((eachItem) => {
        // const{ id, title, image, price, description } = eachItem;

        // return (
        //   <div key={id}>
        //     <img src={image} alt="" />
        //     <p>{title}</p>
        //     <p>{price}</p>
        //   </div>
        // );
        return (
          <div className="eachItem" key={eachItem.id}>
            <img src={eachItem.image} alt="" />
           <div>
           <p>{eachItem.title}</p>
           <p>{eachItem.price}</p>
              <div className="eachItem-quantity">
                <p>-</p>
                <p>{eachItem.quantity}</p>
                <p>+</p>
              </div>
           </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
