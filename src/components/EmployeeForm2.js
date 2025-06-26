import React, { useRef } from 'react';

const EmployeeForm2 = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const departmentRef = useRef();
  const salaryRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const employee = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      department: departmentRef.current.value,
      salary: salaryRef.current.value
    };

    console.log('Submitted Employee (Uncontrolled):', employee);
    alert('Employee data submitted!');

    // Optional: Reset the form manually
    nameRef.current.value = '';
    emailRef.current.value = '';
    departmentRef.current.value = '';
    salaryRef.current.value = '';
  };

  return (
    <div style={styles.container}>
      <h2>Employee Registration Form (Uncontrolled)</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label>Name:</label>
          <input type="text" ref={nameRef} required />
        </div>

        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input type="email" ref={emailRef} required />
        </div>

        <div style={styles.inputGroup}>
          <label>Department:</label>
          <input type="text" ref={departmentRef} required />
        </div>

        <div style={styles.inputGroup}>
          <label>Salary:</label>
          <input type="number" ref={salaryRef} required />
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

// Reuse same inline styles
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

export default EmployeeForm2;
