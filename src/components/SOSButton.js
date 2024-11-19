import React, { useState } from "react";

function SOSButton() {
  const [userLocation, setUserLocation] = useState(null);

  const handleSOSPress = () => {
    // Check if geolocation is available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Extract latitude and longitude
          const { latitude, longitude } = position.coords;
          const location = { latitude, longitude };

          // Save location in state
          setUserLocation(location);

          // Log to console (for debugging or transferring to backend)
          console.log("User Location:", location);

          // Example alert to show location
          alert(`SOS Triggered! Location: Lat: ${latitude}, Long: ${longitude}`);
        },
        (error) => {
          // Handle error
          console.error("Error retrieving location:", error);
          alert("Unable to retrieve your location. Please check location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div style={styles.container}>
      <button style={styles.sosButton} onClick={handleSOSPress}>
        SOS
      </button>
      {userLocation && (
        <p style={styles.locationText}>
          Current Location: Lat {userLocation.latitude}, Long {userLocation.longitude}
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
  },
  sosButton: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundColor: "red",
    color: "white",
    fontSize: "24px",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  locationText: {
    marginTop: "20px",
    fontSize: "16px",
    color: "#333",
  },
};

export default SOSButton;
