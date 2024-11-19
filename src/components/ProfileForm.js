import React, { useState, useEffect } from "react";

function ProfileForm({ onSave, onClose }) {
  // Initialize state with either local storage data or default values
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("profileData");
    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          age: "",
          phone: "",
          bloodGroup: "",
          address: "",
          gender: "",
          Phone_Number_Emergency_Contact: "",
          Pre_existing_Medical_Conditions: "",
          Languages_Spoken: "",
          Disability_Information: "",
          Special_Notes: "",
        };
  });

  // Save form data to local storage whenever it updates
  useEffect(() => {
    localStorage.setItem("profileData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile data saved successfully!"); // Feedback to the user
    onSave(formData); // Save the profile data
    onClose(); // Close the form
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.formContainer}>
        <h3>Edit Profile</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="bloodGroup"
            placeholder="Blood Group"
            value={formData.bloodGroup}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="Phone_Number_Emergency_Contact"
            placeholder="Emergency Contact Number"
            value={formData.Phone_Number_Emergency_Contact}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="Pre_existing_Medical_Conditions"
            placeholder="Pre-existing Medical Conditions"
            value={formData.Pre_existing_Medical_Conditions}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="Languages_Spoken"
            placeholder="Languages Spoken"
            value={formData.Languages_Spoken}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="Disability_Information"
            placeholder="Disability Information"
            value={formData.Disability_Information}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="Special_Notes"
            placeholder="Special Notes"
            value={formData.Special_Notes}
            onChange={handleChange}
            style={styles.input}
          />
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.saveButton}>
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              style={styles.cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  saveButton: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
  },
  cancelButton: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
  },
};

export default ProfileForm;
