import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    bookingDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <u>Contact Us</u>
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">
            Name:
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="phoneNumber">
            Phone Number:
          </label>
          <br />
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">
            Email:
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="bookingDate">
            Date for Booking:
          </label>
          <br />
          <input
            type="date"
            id="bookingDate"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Go Jolly!
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    background:
      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQvykaXPTZz3nO7K1dWHq6RMUw6R9RBjCwmQ&usqp=CAU") center/cover no-repeat',
    height: "100vh",
    padding: "40px",
    textAlign: "center",
  },
  header: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "0 auto",
  },
  formGroup: {
    marginBottom: "20px",
    textAlign: "left",
  },
  label: {
    fontWeight: "700",
  },
  submitButton: {
    background: "linear-gradient(to right, #ff6b6b, #56ab2f)",
    color: "black",
    border: "none",
    padding: "12px 20px",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
};

export default ContactUs;
