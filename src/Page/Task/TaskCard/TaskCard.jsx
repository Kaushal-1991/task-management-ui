import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import UserList from "../UserList";
import SubmissionList from "./SubmissionList";
import EditTask from "../EditTask";

const role = "ROLE_ADMIN";

const TaskCard = ({
  title,
  description,
  techStack,
  status,
  priority,
  dueDate,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
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

  const [openEditTask, setOpenEditTask] = useState(false);
  const handleOpenEdit = () => {
    setOpenEditTask(true);
    handleMenuClose();
  };

  const handleCloseEdit = () => {
    setOpenEditTask(false);
  };

  const handleDelete = () => {};

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-fuchsia-500/20 bg-gradient-to-br from-[#160a24] via-[#1c1030] to-[#0f1729] p-4 shadow-[0_0_35px_rgba(192,86,255,0.18)] sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(192,86,255,0.18),_transparent_42%)]" />
      <div className="relative flex flex-col gap-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-200">
              {status}
            </span>
            <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-200">
              {priority}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-300">
              {dueDate}
            </span>
            <IconButton
              id="basic-button"
              aria-controls={openMenu ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleMenuClick}
              className="rounded-full border border-white/10 bg-white/10 text-white hover:bg-white/20"
            >
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
          <div className="flex-shrink-0">
            <div className="rounded-[20px] border border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-500/20 to-slate-900/70 p-3 shadow-inner">
              <img
                src="/images/watch.svg"
                alt="watch"
                className="h-24 w-24 rounded-[16px] object-cover sm:h-28 sm:w-28"
              />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-sm text-fuchsia-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="rounded-full bg-white/10 px-3 py-1">
              4 members
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">3 files</span>
          </div>

          <button className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/15 px-4 py-2 text-sm font-semibold text-fuchsia-100 transition hover:bg-fuchsia-500/25">
            View Details
          </button>
        </div>

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
              <MenuItem onClick={handleOpenEdit}>Edit</MenuItem>
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
      <EditTask open={openEditTask} handleClose={handleCloseEdit} />
    </div>
  );
};

export default TaskCard;
