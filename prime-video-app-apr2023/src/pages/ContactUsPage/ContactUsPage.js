import React, { useContext, useState } from 'react';
import { PageContext } from '../../contexts/PageContext';

const ContactUsPage = () => {
  // Step 3 of React Context API: Let's receive the data suplied thru PageContext
  const userStatus = useContext(PageContext);
  console.log(userStatus);

  const [formState, setFormState] = useState({
    isSaved: false,
    isError: false
  });

  const handleSubmit = (event) => {
    console.log('Submitted');
    event.preventDefault();
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    setFormState({
      // computed object
      [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Logged In Status:{' '}
        {userStatus.isLoggedIn ? 'Logged In' : 'Not Logged In'}
      </p>
      <p>Last Login: {userStatus.lastLogin.toString()}</p>

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
              value={formState.fullName}
              onChange={handleChange}
              name="fullName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={formState.email}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPhone"
              value={formState.phone}
              name="phone"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputQuery" className="form-label">
              Query
            </label>
            <textarea
              className="form-control"
              id="exampleInputQuery"
              value={formState.query}
              name="query"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
