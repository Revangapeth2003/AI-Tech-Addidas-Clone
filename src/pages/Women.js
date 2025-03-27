import React from "react";
import WomenData from "../data/WomenData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/CartSlice.js";


const Women = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
  };

  const removeCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };


  return (
    <div>
      {/* Bootstrap Carousel */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-touch="false"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {WomenData.slice(0, 3).map((product, index) => (
            <div
              key={product.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={product.img}
                className="d-block w-100"
                alt={product.title}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container py-4">
        <div className="row g-4 justify-content-center align-items-stretch">
          {WomenData.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 d-flex flex-column">
                <img
                  src={product.img}
                  className="card-img-top img-fluid"
                  alt={product.title}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{product.title}</h5>
                  <h6 className="text-center">{product.price}</h6>
                  <p className="card-text flex-grow-1 text-center">
                    Discover the latest styles in women's fashion with our
                    exclusive collection.
                  </p>
                  {/* <button className="btn btn-primary mt-auto">Shop Now</button> */}
                  {cartProducts.find((items) => items.id === product.id) ? (
                    <button
                      onClick={() => removeCart(product)}
                      className="btn btn-danger mt-auto"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      onClick={() => addCart(product)}
                      className="btn btn-primary mt-auto"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
