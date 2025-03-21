import React from "react";
import animationImage from "../images/addidas sec 1 animation image.gif";

const Home = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <img src={animationImage} alt="" className="overflow-hidden img-fluid" />
      <div className="position-absolute bottom-0 w-25 mb-5 ms-5">
        <h4 className="bg-white d-inline-block">Holi Sale: Color Up!</h4>
        <br />
        <p className="bg-white d-inline">
          Splash into Savings with FLAT 40% Off on Selected Articles
        </p>
        <div>
          <div className="row mt-2">
            <div className="col">
              <button type="button" className="btn btn-outline-dark">
                <span>MEN</span>
                <span className="ms-2">
                  <i class="bx bx-right-arrow-alt"></i>
                </span>
              </button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-outline-dark">
                <span>WOMEN</span>
                <span className="ms-2">
                  <i className="bi bi-arrow-right text-dark"></i>
                </span>
              </button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-outline-dark">
                <span>KIDS</span>
                <span className="ms-2">
                  <i class="bx bx-right-arrow-alt"></i>
                </span>
              </button>
            </div>
          </div>










        </div>
      </div>
    </div>
  );
};

export default Home;
