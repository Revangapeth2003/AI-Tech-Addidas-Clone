import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [products, setProducts] = useState([]);

  const getAllItems = async () => {
    try {
      const response = await axios.get("http://localhost:3030/form");
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const deleteItems = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/form/${id}`);
      alert("Deleted Successfully");
      setProducts((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting item:", err);
      alert("Failed to delete item.");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Update Products</h1>

      <table className="table table-bordered table-hover text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>DELETE</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  src={item.img}
                  alt="product"
                  className="img-fluid rounded"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              </td>
              <td className="fw-semibold">{item.title}</td>
              <td className="text-truncate" style={{ maxWidth: "150px" }}>
                {item.description}
              </td>
              <td className="fw-bold">${item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => deleteItems(item._id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={`/edit/${item._id}`}>
                  <button className="btn btn-sm btn-outline-warning">
                    Update
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Update;
