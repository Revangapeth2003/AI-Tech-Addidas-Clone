import React from "react";
import MenData from "../data/MenData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/CartSlice.js";

const Men = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  console.log(cartProducts,"data from redux")
  const dispatch = useDispatch();

  const addCart = (item) => {
    console.log("Data on add men",item)
    dispatch(addToCart(item));
  };

  const removeCart = (item) => {
    console.log("Data on delete men",item)
    dispatch(removeFromCart(item));
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
          {MenData.slice(0, 3).map((product, index) => (
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

      {/* Product Grid */}
      <div className="container py-4">
        <div className="row g-4 justify-content-center align-items-stretch">
          {MenData.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 d-flex flex-column">
                <img
                  src={product.img}
                  className="card-img-top img-fluid object-fit-cover"
                  alt={product.title}
                  height={"250px"}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{product.title}</h5>
                  <h6 className="text-center">{product.price}</h6>
                  <p className="card-text flex-grow-1 text-center">
                    Discover the latest styles in men's fashion with our
                    exclusive collection.
                  </p>
                  {/* <button className="btn btn-primary mt-auto">Shop Now</button> */}
                  {cartProducts.find((item) => item.id === product.id) ? (
                    <button
                      onClick={() => removeCart(product)}
                      // onClick={() => deleteCart(item.id , item.quantity)}

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

export default Men;
