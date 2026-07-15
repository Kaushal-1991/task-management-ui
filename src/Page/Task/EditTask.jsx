import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import dayjs from "dayjs";

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

const EditTask = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    tag: [],
    deadline: null,
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

  const formatDate = (date) => {
    return date ? date.toISOString() : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      deadline: formatDate(formData.deadline),
    };

    console.log(payload);

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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Deadline"
                value={formData.deadline}
                onChange={(date) => {
                  setFormData((prev) => ({
                    ...prev,
                    deadline: date,
                  }));
                }}
                slotProps={{
                  textField: {
                    fullWidth: true,
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>

          <Grid size={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
            >
              Update Task
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default EditTask;
