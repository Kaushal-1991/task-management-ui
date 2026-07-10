import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import sidebarLogo from "../../assets/sidebar-logo.svg";
import "./Sidebar.css";
import CreateNewTask from "../Task/CreateNewTask";

const menu = [
  { name: "Home", value: "Home", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "DONE", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
  { name: "ASSIGNED", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
  { name: "NOT ASSIGNED", value: "NOT ASSIGNED", role: ["ROLE_ADMIN"] },
  { name: "Create New Task", value: "", role: ["ROLE_ADMIN"] },
  { name: "Notification", value: "", role: ["ROLE_CUSTOMER"] },
];

const role = "ROLE_ADMIN";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [createNewTask, setCreateNewTask] = useState(false);
  const handleCreateNewTask = () => {
    setCreateNewTask(true);
  };
  const handleCloseNewTask = () => {
    setCreateNewTask(false);
  };
  const handleMenuChange = (itemName) => {
    if (itemName === "Create New Task") {
      handleCreateNewTask();
    }
    setActiveMenu(itemName);
  };

  return (
    <>
      <div className="card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]">
        <div className="space-y-5 h-full">
          <div className="flex justify-center">
            <Avatar
              variant="square"
              sx={{ width: "8rem", height: "8rem" }}
              src={sidebarLogo}
              alt="Task Management Logo"
            />
          </div>
          {menu
            .filter((item) => item.role.includes(role))
            .map((item) => (
              <p
                onClick={() => handleMenuChange(item.name)}
                className={`py-3 px-5 rounded-full text-center cursor-pointer ${activeMenu === item.name ? "activeMenuItem" : "menuItem"}`}
              >
                {item.name}
              </p>
            ))}
          <Button
            fullWidth
            className="logoutButton"
            onClick={() => handleMenuChange("Logout")}
          >
            Logout
          </Button>
        </div>
      </div>
      <CreateNewTask open={createNewTask} handleClose={handleCloseNewTask} />
    </>
  );
};

export default Sidebar;
