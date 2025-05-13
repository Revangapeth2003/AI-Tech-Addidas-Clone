import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const [productItems, setProductItems] = useState({
    title: "",
    description: "",
    img: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3030/form/${id}`);
        const data = res.data;
        setProductItems({
          title: data.title || "",
          description: data.description || "",
          img: data.img || "",
          quantity: data.quantity || "",
          price: data.price || "",
        });
      } catch (err) {
        console.error("Error fetching product:", err);
        alert("Failed to load product data.");
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductItems((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(`http://localhost:3030/form/${id}`, productItems);
      alert("Updated successfully!");
      window.location.href = "/update";
    } catch (err) {
      console.error("Update failed", err);
      alert("Failed to update. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">Update Your Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-12">
              <label htmlFor="title" className="form-label fw-bold">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={productItems.title}
                name="title"
                onChange={handleChange}
                placeholder="Enter product title"
                required
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="description" className="form-label fw-bold">
                Description
              </label>
              <textarea
                id="description"
                className="form-control"
                value={productItems.description}
                name="description"
                onChange={handleChange}
                rows="3"
                placeholder="Enter product description"
                required
              ></textarea>
            </div>

            <div className="col-md-6">
              <label htmlFor="price" className="form-label fw-bold">
                Price
              </label>
              <input
                type="number"
                id="price"
                className="form-control"
                value={productItems.price}
                name="price"
                onChange={handleChange}
                placeholder="Enter price"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="quantity" className="form-label fw-bold">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                className="form-control"
                value={productItems.quantity}
                name="quantity"
                onChange={handleChange}
                placeholder="Enter quantity"
                required
              />
            </div>

            <div className="col-md-12">
              <label htmlFor="img" className="form-label fw-bold">
                Image URL
              </label>
              <input
                type="text"
                id="img"
                className="form-control"
                value={productItems.img}
                name="img"
                onChange={handleChange}
                placeholder="Enter image URL"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-5">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
