import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const validation = () => {
    const newError = {};
    if (!form.username) {
      newError.username = "invalid username";
    }

    if (!form.email) newError.email = " invalid email";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newError.email = "invalid Email-ID";

    if (!form.password) newError.password = "invalid password";
    else {
      if (form.password.length < 6)
        newError.password = "Need Must 6 characters";
      if (!/[a-z]/.test(form.password))
        newError.password = "Enter atleast one small characters";
      if (!/[A-Z]/.test(form.password))
        newError.password = "Enter atleast one capital characters";
      if (!/[!@#$%^&*?]/.test(form.password))
        newError.password = "Enter atleast one capital characters";
    }
    return newError;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validation();
    if (Object.keys(validationError).length === 0) {
      console.log("Form submitted successfully:", form);
      setForm({
        username: "",
        email: "",
        password: "",
      });
      setError({});
    } else {
      setError(validationError);
    }
  };

  return (
    <div className="container p-5">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <h3>USERNAME</h3>
          </label>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={form.username}
            className="input-group"
            onChange={handleChange}
          />
          {error.username && <p style={{ color: "red" }}>{error.username}</p>}
        </div>
        <div>
          <label>
            <h3>EMAIL</h3>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={form.email}
            className="input-group"
            onChange={handleChange}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>
        <div>
          <label>
            <h3>PASSWORD</h3>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={form.password}
            className="input-group"
            onChange={handleChange}
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>
        <button type="submit" className="btn btn-outline-primary my-3 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
