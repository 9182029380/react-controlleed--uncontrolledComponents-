import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 const validationSchema = Yup.object({
  user: Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required')
  }),
  hobbies: Yup.array().of(
    Yup.string().required('Hobby is required')
  ).min(1, 'At least one hobby is required'),
  preferences: Yup.object({
    newsletter: Yup.boolean(),
    notifications: Yup.boolean()
  })
 });
 function AdvancedFormikForm() {
  const initialValues = {
    user: {
      name: '',
      email: ''
    },
    hobbies: [''],
    preferences: {
      newsletter: false,
      notifications: true
    }
  };
  const handleSubmit = (values, actions) => {
    console.log('Advanced form submitted:', values);
    actions.setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <h3>User Information</h3>
          <div>
            <label htmlFor="user.name">Name:</label>
            <Field name="user.name" type="text" />
            <ErrorMessage name="user.name" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label htmlFor="user.email">Email:</label>
            <Field name="user.email" type="email" />
            <ErrorMessage name="user.email" component="div" style={{ color: 'red' }} />
          </div>
          <h3>Hobbies</h3>
          <FieldArray name="hobbies">
            {({ push, remove }) => (
              <div>
                {values.hobbies.map((hobby, index) => (
                  <div key={index} style={{ marginBottom: '10px' }}>
                    <Field
                      name={`hobbies.${index}`}
                      type="text"
                      placeholder="Enter hobby"
                    />
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      disabled={values.hobbies.length === 1}
                      style={{ marginLeft: '10px' }}
                    >
                      Remove
                    </button>
                    <ErrorMessage
                      name={`hobbies.${index}`}
                      component="div"
                      style={{ color: 'red' }}
                    />
                  </div>
                ))}
                <button type="button" onClick={() => push('')}>
                  Add Hobby
                </button>
              </div>
            )}
          </FieldArray>
          <h3>Preferences</h3>
          <div>
            <label>
              <Field name="preferences.newsletter" type="checkbox" />
              Subscribe to newsletter
            </label>
          </div>
Formik with Custom Field Components
          <div>
            <label>
              <Field name="preferences.notifications" type="checkbox" />
              Enable notifications
            </label>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
 }
export default AdvancedFormikForm;
