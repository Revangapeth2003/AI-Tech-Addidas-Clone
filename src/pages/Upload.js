import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    quantity: "",
    img: "",
  });

  const [error, setError] = useState({});

  const validateForm = () => {
    const newError = {};
    if (!form.title) newError.title = "Please enter your title";
    if (!form.description)
      newError.description = "Please enter your description";
    if (!form.price) newError.price = "Please enter your price";
    if (!form.quantity) newError.quantity = "Please enter your quantity";
    if (!form.img) newError.img = "Please enter your img";
    return newError;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formError = validateForm();
    setError(formError);

    if (Object.keys(formError).length === 0) {
      try {
        const response = await axios.post("http://localhost:3030/form", form);

        if (response.status === 200 || response.status === 201) {
          alert("Form submitted successfully!");
          setForm({
            title: "",
            description: "",
            price: "",
            quantity: "",
            img: "",
          });
          setError({});
          window.location.href = "/update";
        } else {
          alert("Error: " + response.data.error);
        }
      } catch (err) {
        console.error("Error submitting form:", err);
        alert("Failed to submit the form.");
      }
    } else {
      console.log("Please fix the errors before submitting.");
    }
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
            name="img"
            value={form.img}
            onChange={handleChange}
          />
          {form.img && (
            <img
              src={form.img}
              alt="Preview"
              className="img-fluid mt-2"
              style={{ maxHeight: "200px" }}
            />
          )}
          {error.img && <p style={{ color: "red" }}>{error.img}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">
            <h3>Title</h3>
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          {error.title && <p style={{ color: "red" }}>{error.title}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">
            <h3>Description</h3>
          </label>
          <textarea
            className="form-control"
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="3"
          />
          {error.description && (
            <p style={{ color: "red" }}>{error.description}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            <h3>Price</h3>
          </label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={form.price}
            onChange={handleChange}
          />
          {error.price && <p style={{ color: "red" }}>{error.price}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">
            <h3>Quantity</h3>
          </label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
          />
          {error.quantity && <p style={{ color: "red" }}>{error.quantity}</p>}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Upload;
