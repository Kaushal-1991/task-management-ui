import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 2,
};

const UserList = ({ handleClose, open }) => {
  const task = [1, 1, 1];
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {task.map((item, index) => (
              <>
                <div className="flex justify-between items-center">
                  <div>
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar src="/static/images/avatar/1.jpg" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={`User ${index + 1}`}
                        secondary="User"
                      />
                    </ListItem>
                  </div>
                  <div>
                    <Button className="customButton">Select</Button>
                  </div>
                </div>
                {index != task.length - 1 ? (
                  <Divider variant="inset"></Divider>
                ) : null}
              </>
            ))}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default UserList;
