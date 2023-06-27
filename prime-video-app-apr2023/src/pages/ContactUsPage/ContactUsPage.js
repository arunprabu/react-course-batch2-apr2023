import React, { useContext } from 'react';
import { PageContext } from '../../contexts/PageContext';

const ContactUsPage = () => {
  // Step 3 of React Context API: Let's receive the data suplied thru PageContext
  const userStatus = useContext(PageContext);
  console.log(userStatus);

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Logged In Status:{' '}
        {userStatus.isLoggedIn ? 'Logged In' : 'Not Logged In'}
      </p>
      <p>Last Login: {userStatus.lastLogin.toString()}</p>
    </div>
  );
};

export default ContactUsPage;
