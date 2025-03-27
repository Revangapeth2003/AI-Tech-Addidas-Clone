import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart,updateQuantity } from "../store/CartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const incrementCart = (id,quantity)=>{
    dispatch(updateQuantity({id,quantity : quantity + 1}))
  };

  const decrementCart = (id,quantity)=>{
    if(quantity > 1){
      dispatch(updateQuantity({id,quantity : quantity - 1}))
    }
  };

  const deleteCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Shopping Cart</h1>
      {cartProducts.length === 0 ? (
        <h4 className="text-center">Your cart is empty.</h4>
      ) : (
        <div className="row">
          {cartProducts.map((item) => (
            <div
              key={item.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
              <div className="card h-100">
                <img
                  src={item.img}
                  className="card-img-top img-fluid"
                  alt={item.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.price}</p>
                  <button className="btn btn-outline-primary mx-2" onClick={()=>{incrementCart(item.id,item.quantity)}}>
                    +
                  </button>{item.quantity}
                  <button className="btn btn-outline-primary mx-2" onClick={()=>{decrementCart(item.id,item.quantity)}}>
                    -
                  </button>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => deleteCart(item)}
                  >
                    Remove from Cart
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
