import React, { useState } from 'react';

const EmployeeValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'HR', // default selected value
    gender: '',
    skills: [],
  });

  const [errors, setErrors] = useState({});

  // Handle change for text, dropdown, radio
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle checkbox selection
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updatedSkills = checked
      ? [...formData.skills, value]
      : formData.skills.filter(skill => skill !== value);

    setFormData({ ...formData, skills: updatedSkills });
  };

  // Simple validation function
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.includes('@')) tempErrors.email = "Enter a valid email.";
    if (!formData.gender) tempErrors.gender = "Select your gender.";
    if (formData.skills.length === 0) tempErrors.skills = "Select at least one skill.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Employee Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Textbox */}
        <div style={styles.inputGroup}>
          <label>Name:</label><br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <span style={styles.error}>{errors.name}</span>
        </div>

        {/* Textbox */}
        <div style={styles.inputGroup}>
          <label>Email:</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <span style={styles.error}>{errors.email}</span>
        </div>

        {/* Dropdown (Select Box with Default) */}
        <div style={styles.inputGroup}>
          <label>Department:</label><br />
          <select name="department" value={formData.department} onChange={handleChange}>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        {/* Radio Buttons */}
        <div style={styles.inputGroup}>
          <label>Gender:</label><br />
          <label><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} /> Male</label>
          <label><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} /> Female</label>
          <span style={styles.error}>{errors.gender}</span>
        </div>

        {/* Checkboxes */}
        <div style={styles.inputGroup}>
          <label>Skills:</label><br />
          <label><input type="checkbox" value="React" checked={formData.skills.includes("React")} onChange={handleCheckboxChange} /> React</label>
          <label><input type="checkbox" value="Java" checked={formData.skills.includes("Java")} onChange={handleCheckboxChange} /> Java</label>
          <label><input type="checkbox" value="SQL" checked={formData.skills.includes("SQL")} onChange={handleCheckboxChange} /> SQL</label>
          <span style={styles.error}>{errors.skills}</span>
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '450px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial'
  },
  inputGroup: {
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    border: 'none',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    marginLeft: '5px'
  }
};

export default EmployeeValidation;
