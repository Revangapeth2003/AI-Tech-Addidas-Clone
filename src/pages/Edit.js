import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [productItems, setProductItems] = useState({
    title: "",
    description: "", // Changed from 'dis' to 'description'
    img: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3030/form/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Map the incoming data to match our state structure
        setProductItems({
          title: data.title || "",
          description: data.description || "", // Changed from 'dis'
          img: data.img || "",
          quantity: data.quantity || "",
          price: data.price || "",
        });
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductItems((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3030/form/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productItems),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Updated successfully!");
        window.location.href = "/update";
      })
      .catch((err) => {
        console.error("Update failed", err);
        alert("Failed to update. Please try again.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className="p-3 text-center">Updating Your Product</h3>
        <div className="g-3 text-center">
          <div>
            <label className="me-4">
              <b>Title</b>
            </label>
            <input
              type="text"
              value={productItems.title}
              name="title"
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label className="me-4">
              <b>Description</b>
            </label>
            <input
              type="text"
              value={productItems.description} // Changed from 'dis'
              name="description" // Changed from 'dis'
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label className="me-4">
              <b>Price</b>
            </label>
            <input
              type="number"
              value={productItems.price}
              name="price"
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label className="me-4">
              <b>Quantity</b>
            </label>
            <input
              type="number"
              value={productItems.quantity}
              name="quantity"
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label className="me-4">
              <b>Image URL</b>
            </label>
            <input
              type="text"
              value={productItems.img}
              name="img"
              onChange={handleChange}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary mb-3">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
