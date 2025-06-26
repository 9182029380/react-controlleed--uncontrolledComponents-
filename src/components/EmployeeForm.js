import React, { useState } from 'react';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    department: '',
    salary: ''
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Data:", employee);
    alert("Form Submitted");
  };

  return (
    <div className="container">
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" value={employee.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={employee.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Department:</label><br />
          <input type="text" name="department" value={employee.department} onChange={handleChange} required />
        </div>
        <div>
          <label>Salary:</label><br />
          <input type="number" name="salary" value={employee.salary} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
