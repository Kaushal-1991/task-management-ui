import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import sidebarLogo from "../../assets/sidebar-logo.svg";
import "./Sidebar.css";
import CreateNewTask from "../Task/CreateNewTask";
import { useLocation, useNavigate } from "react-router-dom";

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
  const location = useLocation();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Home");
  const [createNewTask, setCreateNewTask] = useState(false);
  const handleCreateNewTask = () => {
    setCreateNewTask(true);
  };
  const handleCloseNewTask = () => {
    setCreateNewTask(false);
  };
  const handleMenuChange = (item) => {
    setActiveMenu(item);
    const updateParams = new URLSearchParams(location.search);
    if (item === "Create New Task") {
      handleCreateNewTask();
    } else if (item == "Home") {
      updateParams.delete("filter");
      const queryString = updateParams.toString();
      const updatedPath = queryString
        ? `${location.pathname} ? ${queryString}`
        : location.pathname;
      navigate(updatedPath);
    } else {
      updateParams.set("filter", item);
      navigate(`${location.pathname}?${updateParams.toString()}`);
    }
  };

  return (
    <>
      <div className="card min-h-[85vh] flex flex-col justify-between lg:sticky lg:top-4">
        <div className="space-y-4 h-full">
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
