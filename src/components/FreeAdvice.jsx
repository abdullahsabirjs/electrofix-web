import React, { useState } from "react";
import "../styles/FreeAdvice.css"

const FreeMashwara = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("access_key", "51813a83-0a10-4898-a9ed-4f549a7bd440");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const result = await response.json();

    if (result.success) {
      setStatus("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Error! Please try again.");
    }
  };

  return (
    <div className="free-mashwara-container">
      <h2 className="heading">Free Mashwara (Consultation)</h2>
      <p className="sub-heading">Fill out the form below and get a free consultation.</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Apka naam" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Apki Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Apki Problem" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default FreeMashwara;
