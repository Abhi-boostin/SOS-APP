    import React from "react";

    function ProfileButton({ onClick }) {
    return (
        <button style={styles.button} onClick={onClick}>
        Profile
        </button>
    );
    }

    const styles = {
    button: {
        position: "absolute",
        top: "20px",
        left: "20px",
        padding: "10px 20px",
        borderRadius: "5px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        cursor: "pointer",
    },
    };

    export default ProfileButton;
