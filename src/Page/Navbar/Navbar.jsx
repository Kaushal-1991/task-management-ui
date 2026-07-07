import { Avatar } from "@mui/material";
import React from "react";
import taskLogo from "../../assets/task-logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10 flex justify-between items-center">
      <p className="font-bold text-lg">Task Management</p>
      <div className="flex gap-5 items-center">
        <p>Kaushal</p>
        <Avatar
          src={taskLogo}
          alt="Task Management Logo"
          sx={{ width: 40, height: 40 }}
        />
      </div>
    </div>
  );
};

export default Navbar;
