import { useState } from "react";
import "../styles/ComplaintForm.css";

const ComplainSection = () => {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    message: "",
    access_key: "51813a83-0a10-4898-a9ed-4f549a7bd440", // ✅ Tumhari Web3Forms API Key
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend, // ✅ Correct FormData format
      });

      const result = await response.json();
      console.log("Web3Forms Response:", result); // ✅ Debugging ke liye

      if (result.success) {
        setStatus("Complaint submitted successfully! ✅");
        setFormData({
          service: "",
          name: "",
          email: "",
          message: "",
          access_key: "51813a83-0a10-4898-a9ed-4f549a7bd440", // ✅ API Key Reset
        });
      } else {
        setStatus("❌ Error submitting the complaint. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("❌ Failed to submit. Check your internet connection.");
    }
  };

  return (
    <div className="complain-container">
      <h2 className="complaint-heading">Lodge a Complaint</h2>
      <p className="sub-heading">Select a service and describe your issue.</p>

      <form className="complain-form" onSubmit={handleSubmit}>
        <select
          name="service"
          className="dropdown"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a Service</option>
          <option value="AC Repair">AC Repair</option>
          <option value="Fridge Repair">Fridge Repair</option>
          <option value="Solar Installation">Solar Installation</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Describe your issue"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Complaint</button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default ComplainSection;
