import React, { useContext, useState } from 'react';
import { PageContext } from '../../contexts/PageContext';
import axios from 'axios';

const ContactUsPage = () => {
  // Step 3 of React Context API: Let's receive the data suplied thru PageContext
  const userStatus = useContext(PageContext);
  console.log(userStatus);

  /* steps
    1. read the form data on submit button click
      1.1 stop the page refresh [DONE]
      1.2 read the form data [DONE]
    2. send the form data to the rest api
      2.1 What's the REST API URL?
      2.2 What's the Http Method?
      2.3 What's the REST API Client? axios or fetch
      2.4 What's the form data?
    3. display the form submission status
  */

  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    query: '',
    isSubmitting: false,
    isSaved: false,
    isError: false
  });
  // console.log(formState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState({
      ...formState,
      isSubmitting: true,
      isSaved: false,
      isError: false
    });

    // Submit the form data to the REST API
    // What's the REST API URL? https://jsonplaceholder.typicode.com/users
    // What's the HTTP Method? POST
    // What's the REST API Client? axios
    // What's the form data? formState
    axios
      .post('https://jsonplaceholder.typicode.com/users', formState)
      .then((res) => {
        console.log(res);
        if (res && res.data) {
          setFormState({
            ...formState,
            isSubmitting: false,
            isSaved: true,
            isError: false
          });
        }
      })
      .catch((err) => {
        // NEVER FORGET TO CATCH ERROR
        console.log(err);
        setFormState({
          ...formState,
          isSubmitting: false,
          isSaved: false,
          isError: true
        });
      })
      .finally(() => {
        console.log('It is over!');
      });
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Logged In Status:{' '}
        {userStatus?.isLoggedIn ? 'Logged In' : 'Not Logged In'}
      </p>
      <p>Last Login: {userStatus?.lastLogin.toString()}</p>

      <div className="col-md-6">
        <h3>Controlled Components Demo in form input</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="fullName"
              value={formState.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputPhone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputQuery" className="form-label">
              Query
            </label>
            <textarea
              className="form-control"
              id="exampleInputQuery"
              name="query"
              value={formState.query}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={formState.fullName === ''}
          >
            {formState.isSubmitting ? 'Submitting... Please wait...' : 'Submit'}
          </button>
          {formState.isSaved && (
            <div className="alert alert-success">Saved Successfully!</div>
          )}

          {formState.isError && (
            <div className="alert alert-danger">
              Sorry! Some Error Occurred! Try again later!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
