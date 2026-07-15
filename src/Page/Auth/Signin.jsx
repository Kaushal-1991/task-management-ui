import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const Signin = ({ togglePannel }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login form ", formData);
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-center pb-8 ">Login</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></TextField>
        <TextField
          fullWidth
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        ></TextField>
        <div>
          <Button
            fullWidth
            color="primary"
            type="submit"
            variant="contained"
            sx={{ padding: ".9rem" }}
          >
            Login
          </Button>
        </div>
      </form>
      <div>
        <span>don't have an account ?</span>
        <Button onClick={togglePannel}>Signup</Button>
      </div>
    </div>
  );
};

export default Signin;
