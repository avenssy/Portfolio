import React, { useState } from "react";
import contactMePhoto from "/contact-me-photo.gif";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTextareaChange = (e) => {
    const { name, value } = e.target;
    if (value.length <= 500) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="contact-me-div">
      <form className="contact-me-form">
        <h1>Feel free to contact me!</h1>
        <div className="form-boxes">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-boxes">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-boxes">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleTextareaChange}
            maxLength="500"
            required
          ></textarea>
          <div>Characters left: {500 - formData.message.length}</div>
        </div>
        <div>
          <button className="button-6" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="contact-me-photo-div">
        <img className="contact-me-photo" src={contactMePhoto} />
      </div>
    </div>
  );
};

export default ContactMe;
