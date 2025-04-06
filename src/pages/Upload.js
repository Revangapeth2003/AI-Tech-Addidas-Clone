import React, { useState } from "react";

const Upload = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    quantity: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3030/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Form submitted successfully!");
        setForm({
          title: "",
          description: "",
          price: "",
          quantity: "",
          image: "",
        });
        window.location.href = "/update";
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form.");
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
            name="image"
            value={form.image}
            onChange={handleChange}
          />
          {form.image && (
            <img
              src={form.image}
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
            value={form.title}
            onChange={handleChange}
          />
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
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Upload;
