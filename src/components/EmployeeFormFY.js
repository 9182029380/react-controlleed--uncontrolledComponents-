import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EmployeeFormFY = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      department: 'HR', // default
      gender: '',
      skills: []
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      gender: Yup.string()
        .required('Gender is required'),
      skills: Yup.array()
        .min(1, 'Select at least one skill')
    }),
    onSubmit: values => {
      alert('Form submitted!\n' + JSON.stringify(values, null, 2));
    }
  });

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const { skills } = formik.values;

    if (checked) {
      formik.setFieldValue('skills', [...skills, value]);
    } else {
      formik.setFieldValue('skills', skills.filter(skill => skill !== value));
    }
  };

  return (
    <div style={styles.container}>
      <h2>Employee Registration Form</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Name */}
        <div style={styles.inputGroup}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div style={styles.error}>{formik.errors.name}</div>
          )}
        </div>

        {/* Email */}
        <div style={styles.inputGroup}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={styles.error}>{formik.errors.email}</div>
          )}
        </div>

        {/* Department (Dropdown with default) */}
        <div style={styles.inputGroup}>
          <label>Department:</label><br />
          <select
            name="department"
            value={formik.values.department}
            onChange={formik.handleChange}
          >
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        {/* Gender (Radio buttons) */}
        <div style={styles.inputGroup}>
          <label>Gender:</label><br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formik.values.gender === 'Male'}
              onChange={formik.handleChange}
            /> Male
          </label>{' '}
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formik.values.gender === 'Female'}
              onChange={formik.handleChange}
            /> Female
          </label>
          {formik.touched.gender && formik.errors.gender && (
            <div style={styles.error}>{formik.errors.gender}</div>
          )}
        </div>

        {/* Skills (Checkboxes) */}
        <div style={styles.inputGroup}>
          <label>Skills:</label><br />
          <label>
            <input
              type="checkbox"
              value="React"
              checked={formik.values.skills.includes('React')}
              onChange={handleCheckboxChange}
            /> React
          </label>{' '}
          <label>
            <input
              type="checkbox"
              value="Java"
              checked={formik.values.skills.includes('Java')}
              onChange={handleCheckboxChange}
            /> Java
          </label>{' '}
          <label>
            <input
              type="checkbox"
              value="SQL"
              checked={formik.values.skills.includes('SQL')}
              onChange={handleCheckboxChange}
            /> SQL
          </label>
          {formik.touched.skills && formik.errors.skills && (
            <div style={styles.error}>{formik.errors.skills}</div>
          )}
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
    marginTop: '5px'
  }
};

export default EmployeeFormFY;
