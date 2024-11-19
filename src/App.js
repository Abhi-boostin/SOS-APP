import React, { useState } from "react";
import ProfileButton from "./components/ProfileButton";
import ProfileForm from "./components/ProfileForm";
import SOSButton from "./components/SOSButton";
import ResponderLoginForm from "./components/ResponderLoginForm";
import ToggleButton from "./components/ToggleButton";

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Toggle form visibility
  const [profileData, setProfileData] = useState({}); // Store profile data
  const [isResponderLoggedIn, setIsResponderLoggedIn] = useState(false); // Track responder login status
  const [showResponderLogin, setShowResponderLogin] = useState(false); // Track whether to show the responder login form

  const handleProfileSave = (data) => {
    setProfileData(data);
    setIsProfileOpen(false); // Close the form after saving
    console.log("Profile Data Saved: ", data);
  };

  const handleResponderLogin = (status) => {
    setIsResponderLoggedIn(status); // Set responder logged in status
    setShowResponderLogin(false); // Hide the login form after successful login
  };

  return (
    <div style={styles.container}>
      {/* Show Profile and Responder buttons only if not logged in */}
      {!isResponderLoggedIn && !showResponderLogin && (
        <>
          <ProfileButton onClick={() => setIsProfileOpen(true)} />
          <button onClick={() => setShowResponderLogin(true)} style={styles.button}>
            I'm a Responder
          </button>
        </>
      )}

      {/* Show the profile form if it's open */}
      {isProfileOpen && (
        <ProfileForm onSave={handleProfileSave} onClose={() => setIsProfileOpen(false)} />
      )}

      {/* Show the SOS button unless responder is logged in */}
      {!isResponderLoggedIn && <SOSButton />}

      {/* Show the Responder Login form if the button is clicked */}
      {showResponderLogin && !isResponderLoggedIn && (
        <ResponderLoginForm onLogin={handleResponderLogin} onClose={() => setShowResponderLogin(false)} />
      )}

      {/* Show the responder homepage after login */}
      {isResponderLoggedIn && (
        <>
          <h2>Welcome, Responder!</h2>
          <ToggleButton /> {/* Add the toggle button on the responder's homepage */}
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default App;
