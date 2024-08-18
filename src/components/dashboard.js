import React, { useState } from "react";
import { TextField, Switch, Button, Typography, Box } from "@mui/material";

function Dashboard({ setBannerProps }) {
  const [isVisible, setIsVisible] = useState(true);
  const [description, setDescription] = useState("");
  const [timer, setTimer] = useState(10);
  const [link, setLink] = useState("");

  const handleSubmit = () => {
    // Ensure timer is a positive integer
    const validTimer = Math.max(0, parseInt(timer, 10));
    setBannerProps({ isVisible, description, timer: validTimer, link });
  };

  return (
    <Box
      component="div"
      sx={{ padding: "20px", backgroundColor: "#e3f2fd", borderRadius: "8px" }}
    >
      <Typography variant="h6" gutterBottom>
        Banner Controls
      </Typography>
      <Box
        component="div"
        sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" sx={{ marginRight: "10px" }}>Banner Visibility:</Typography>
          <Switch
            checked={isVisible}
            onChange={() => setIsVisible(!isVisible)}
          />
        </Box>
        <TextField
          label="Banner Description"
          variant="outlined"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          label="Timer (seconds)"
          variant="outlined"
          type="number"
          fullWidth
          value={timer}
          onChange={(e) => setTimer(e.target.value)}
          inputProps={{ min: 0 }} // Ensure non-negative values
        />
        <TextField
          label="Banner Link"
          variant="outlined"
          fullWidth
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Update Banner
        </Button>
      </Box>
    </Box>
  );
}

export default Dashboard;
