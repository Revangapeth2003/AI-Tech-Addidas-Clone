import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    quantity: "",
    image: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3030/form/${id}`)
      .then((res) => res.json())
      .then((data) => setProductData(data));
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const quantity = form.quantity.value;

    const productObj = { image, title, price, description, quantity };
    console.log(productObj);

    fetch(`http://localhost:3030/form/${id}`, {
      method: "PATCH", //edit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Edited Successfully");
        window.location.href = "/update";
      });
  };

  return (
    <div className="container px-3 py-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            <h3>Image URL</h3>
          </label>
          <input
            type="text"
            className="form-control"
            name="image"
            defaultValue={productData.image}
            onChange={(e) =>
              setProductData({ ...productData, image: e.target.value })
            }
          />
          {productData.image && (
            <img
              src={productData.image}
              alt="Preview"
              className="img-fluid mt-2"
              style={{ maxHeight: "200px" }}
            />
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            <h3>Title</h3>
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            defaultValue={productData.title}
            onChange={(e) =>
              setProductData({ ...productData, title: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            <h3>Description</h3>
          </label>
          <textarea
            className="form-control"
            name="description"
            defaultValue={productData.description}
            onChange={(e) =>
              setProductData({ ...productData, description: e.target.value })
            }
            rows="3"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            <h3>Price</h3>
          </label>
          <input
            type="text"
            className="form-control"
            name="price"
            defaultValue={productData.price}
            onChange={(e) =>
              setProductData({ ...productData, price: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            <h3>Quantity</h3>
          </label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            defaultValue={productData.quantity}
            // onChange={(e) =>
            //   setProductData({ ...productData, quantity: e.target.value })
            // }
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
