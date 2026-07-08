import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import UserList from "../UserList";
import SubmissionList from "./SubmissionList";

const role = "ROLE_ADMIN";
const TaskCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openUserList, setOpenUserList] = useState(false);
  const handleOpenUserList = () => {
    setOpenUserList(true);
    handleMenuClose();
  };

  const handleCloseUserList = () => {
    setOpenUserList(false);
  };

  const [openSubmissionList, setOpenSubmissionList] = useState(false);
  const handleOpenSubmissions = () => {
    setOpenSubmissionList(true);
    handleMenuClose();
  };
  const handleCloseSubmissions = () => {
    setOpenSubmissionList(false);
  };
  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <div className="card lg:flex justify-between">
      <div className="lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]">
        <div className="">
          <img
            src="/images/watch.svg"
            alt="watch"
            className="lg:w-[7rem] lg:h-[7rem] object-cover"
          />
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="text-lg font-bold">Watch</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {[1, 1, 1, 1].map((item) => (
              <span className="px-5 py-1 rounded-full techStack">Angular</span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <IconButton
          id="basic-button"
          aria-controls={openMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleMenuClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
          slotProps={{
            list: {
              "aria-labelledby": "basic-button",
            },
          }}
        >
          {role === "ROLE_ADMIN" ? (
            <>
              <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
              <MenuItem onClick={handleOpenSubmissions}>
                See Submissions
              </MenuItem>
              <MenuItem onClick={handleEdit}>Edit</MenuItem>
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </>
          ) : (
            <></>
          )}
        </Menu>
      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList} />
      <SubmissionList
        open={openSubmissionList}
        handleClose={handleCloseSubmissions}
      />
    </div>
  );
};

export default TaskCard;
