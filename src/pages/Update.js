import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Update = () => {
  const [products, setProducts] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:3030/form")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }); // re-fetch on location change

  const deleteItems = (id) => {
    fetch(`http://localhost:3030/form/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Deleted Successfully");
        setProducts((prevItems) => prevItems.filter((item) => item._id !== id));
      });
  };

  return (
    <div className="container-fluid py-5">
      <h1>This is the update page</h1>
      <table className="table table-striped">
        <thead>
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
                  src={item.image}
                  alt="product"
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteItems(item._id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={`/edit/${item._id}`}>
                  <button className="btn btn-warning btn-sm">Update</button>
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
