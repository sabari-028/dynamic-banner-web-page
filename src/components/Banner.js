import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, Button } from "@mui/material";
import styled from "styled-components";

// Styled component for the banner
const StyledBanner = styled(Card)`
  margin: 20px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  text-align: center;
  padding: 20px;
`;

function Banner({ isVisible, description, timer, link }) {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    if (isVisible && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      // Clear interval on component unmount or when timeLeft changes
      return () => clearInterval(timerId);
    }
  }, [timeLeft, isVisible]);

  if (!isVisible || timeLeft <= 0) return null;

  return (
    <StyledBanner>
      <CardContent>
        <Typography variant="h5" component="div">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Time left: {timeLeft}s
        </Typography>
        {link && (
          <Button
            variant="contained"
            color="primary"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: "10px" }}
          >
            Learn More
          </Button>
        )}
      </CardContent>
    </StyledBanner>
  );
}

// Define PropTypes for the component
Banner.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  timer: PropTypes.number.isRequired,
  link: PropTypes.string,
};

export default Banner;
