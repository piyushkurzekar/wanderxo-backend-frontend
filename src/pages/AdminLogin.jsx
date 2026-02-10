import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"; // 👈 custom css
import logoo from '../../public/86c39f2c.png'

const AdminLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.email === "admin@wanderxo.com" &&
      form.password === "admin123"
    ) {
      sessionStorage.setItem(
        "admin",
        JSON.stringify({
          email: form.email,
          role: "admin",
          isLoggedIn: true
        })
      );

      navigate("/admin");
    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        
        {/* LOGO */}
        <div className="text-center mb-3">
          <img 
            src={logoo}  // 👉 public folder me WanderXO logo
            alt="Wander XO"
            className="admin-logo"
          />
        </div>

        <h4 className="text-center fw-bold mb-4">
          Admin Login
        </h4><br />

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Admin Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            className="form-control mb-4"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <button className="btn btn-dark w-100 py-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
