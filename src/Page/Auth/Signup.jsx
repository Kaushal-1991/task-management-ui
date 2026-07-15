import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const Signup = ({ togglePannel }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
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
      <h1 className="text-lg font-bold text-center pb-12 ">Signup</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        ></TextField>
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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.role}
            label="role"
            onChange={handleChange}
          >
            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
            <MenuItem value={"ROLE_ADMIN"}>Admin</MenuItem>
          </Select>
        </FormControl>
        <div>
          <Button
            fullWidth
            color="primary"
            type="submit"
            variant="contained"
            sx={{ padding: ".9rem" }}
          >
            Register
          </Button>
        </div>
      </form>
      <div>
        <span>have an account ?</span>
        <Button onClick={togglePannel}>Signin</Button>
      </div>
    </div>
  );
};

export default Signup;
