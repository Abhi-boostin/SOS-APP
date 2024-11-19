import React, { useState } from "react";

function ToggleButton() {
  const [isActive, setIsActive] = useState(false); // Default state is "Not Active"

  const handleToggle = () => {
    setIsActive((prevState) => !prevState); // Toggle the state between active and not active
  };

  return (
    <div style={styles.container}>
      <button style={styles.toggleButton} onClick={handleToggle}>
        {isActive ? "Active" : "Not Active"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "20px",
  },
  toggleButton: {
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default ToggleButton;
