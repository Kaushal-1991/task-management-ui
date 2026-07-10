import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SubmissionCard from "./SubmissionCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const submissionList = [1, 1, 1];
const SubmissionList = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {submissionList.length > 0 ? (
              <div className="space-y-5">
                {submissionList.map((item, index) => (
                  <SubmissionCard key={index} />
                ))}
              </div>
            ) : (
              <div className="text-center">No Submissions Found</div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SubmissionList;
