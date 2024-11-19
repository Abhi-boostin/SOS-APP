import React, { useState } from "react";
import ToggleSlider from "react-toggle-slider";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false); // Track active status

  const handleToggle = () => {
    setIsActive(!isActive); // Toggle the active state
  };

  return (
    <div style={styles.container}>
      <h3>{isActive ? "Active" : "Not Active"}</h3>
      <ToggleSlider
        value={isActive}
        onChange={handleToggle} // Handle toggle change
        sliderColor="#4CAF50"
        buttonColor="#fff"
        style={styles.toggleSlider}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
  },
  toggleSlider: {
    marginTop: "10px",
  },
};

export default ToggleButton;
