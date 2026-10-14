import React, { useState, useEffect } from "react";
import "./RequestCertificateForm.css";

const initialState = {
  studentName: "",
  rollNumber: "",
  certificateType: "",
  reason: "",
};

function RequestCertificateForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  // Hide the success message automatically after 3 seconds
useEffect(() => {
  if (!submitted) return;
  const timer = setTimeout(() => setSubmitted(false), 3000);
  return () => clearTimeout(timer);
}, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Name is required.";
    }

    if (!formData.rollNumber.trim()) {
      newErrors.rollNumber = "Roll number is required.";
    } else if (!/^[A-Za-z0-9]+$/.test(formData.rollNumber.trim())) {
      newErrors.rollNumber = "Roll number can only contain letters and numbers.";
    }

    if (!formData.certificateType) {
      newErrors.certificateType = "Please select a certificate type.";
    }

    if (!formData.reason.trim()) {
      newErrors.reason = "Please provide a reason for the request.";
    } else if (formData.reason.trim().length < 10) {
      newErrors.reason = "Reason should be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Static-data prototype: no backend/API yet, matches the rest of CertVerify.
    // Replace this with a real POST request once the backend exists.
    console.log("Certificate request submitted:", formData);
    alert(
      `Request submitted for ${formData.studentName} (${formData.rollNumber}) — ${formData.certificateType}`
    );

    setFormData(initialState);
  };

  return (
    <div className="request-form-container">
      <h2>Request a Certificate</h2>
      <p className="request-form-subtitle">
        Fill in your details below. Your institution will review the request.
      </p>

      <form className="request-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="studentName">Full Name</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
          />
          {errors.studentName && (
            <span className="form-error">{errors.studentName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="rollNumber">Roll Number</label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
          />
          {errors.rollNumber && (
            <span className="form-error">{errors.rollNumber}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="certificateType">Certificate Type</label>
          <select
            id="certificateType"
            name="certificateType"
            value={formData.certificateType}
            onChange={handleChange}
          >
            <option value="">Select a type</option>
            <option value="Degree Certificate">Degree Certificate</option>
            <option value="Bonafide Certificate">Bonafide Certificate</option>
            <option value="Transcript">Transcript</option>
            <option value="Course Completion">Course Completion</option>
          </select>
          {errors.certificateType && (
            <span className="form-error">{errors.certificateType}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason for Request</label>
          <textarea
            id="reason"
            name="reason"
            rows="4"
            value={formData.reason}
            onChange={handleChange}
          />
          {errors.reason && <span className="form-error">{errors.reason}</span>}
        </div>

        <button type="submit" className="request-form-submit">
          Submit Request
        </button>

        {submitted && (
          <p className="form-success">Request submitted successfully.</p>
        )}
      </form>
    </div>
  );
}

export default RequestCertificateForm;
