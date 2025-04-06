import React, { useEffect, useState } from "react";

const Update = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/form")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
      <h1>This is update page</h1>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Update;
