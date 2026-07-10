import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  Box,
  Button,
  Modal,
  TextField,
  Grid,
  Autocomplete,
  Typography,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#1c1c1c",
  color: "#fff",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const CreateNewTask = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    tag: [],
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleTagChange = (event, value) => {
    setFormData((data) => ({
      ...data,
      tag: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h5" align="center" mb={3} fontWeight="bold">
          Create New Task
        </Typography>

        <Grid container spacing={3}>
          <Grid size={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={12}>
            <Autocomplete
              id="multiple-limit-tags"
              multiple
              options={["Angular", "React", "Vue", "React Native"]}
              value={formData.tag}
              onChange={handleTagChange}
              renderInput={(params) => (
                <TextField {...params} label="Tags" fullWidth />
              )}
            />
          </Grid>

          <Grid size={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker label="Deadline" />
            </LocalizationProvider>
          </Grid>

          <Grid size={12}>
            <Button fullWidth variant="contained" onClick={handleSubmit}>
              Create Task
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default CreateNewTask;
