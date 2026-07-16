import { Avatar } from "@mui/material";
import React from "react";
import taskLogo from "../../assets/task-logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar z-20 sticky left-0 right-0 top-0 py-4 px-5 lg:px-10 flex justify-between items-center rounded-b-[24px] shadow-lg">
      <div>
        <p className="font-bold text-lg tracking-wide">Task Management</p>
      </div>
      <div className="flex gap-4 items-center">
        <p className="font-medium">Kaushal</p>
        <Avatar
          src="/static/images/avatar/1.jpg"
          alt="Task Management Logo"
          sx={{ width: 40, height: 40 }}
        />
      </div>
    </div>
  );
};

export default Navbar;
