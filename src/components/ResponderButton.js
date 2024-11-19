import React from "react";

function ResponderButton({ onClick }) {
  return (
    <button style={styles.button} onClick={onClick}>
      I'm a Responder
    </button>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#28a745", // Green for responder
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default ResponderButton;
