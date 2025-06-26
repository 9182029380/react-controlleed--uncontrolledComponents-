import React, { useState } from 'react';

const EmployeeForm1 = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    department: '',
    salary: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Employee:', employee);
    alert('Employee data submitted!');
    
    // Clear form after submit (optional)
    setEmployee({
      name: '',
      email: '',
      department: '',
      salary: ''
    });
  };

  return (
    <div style={styles.container}>
      <h2>Employee Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

// Basic inline styles
const styles = {
  container: {
    width: '400px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    border: 'none',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default EmployeeForm1;
