import PropTypes from 'prop-types';
import { useState } from 'react';

const CompanyInfo = ({ foundedYear }) => {
  const [countryName, setCountryName] = useState('USA');

  const handleCountryNameChange = (event) => {
    setCountryName(event.target.value);
  };

  return (
    <div>
      <h2>
        Company Info | Testing JSX, Props, Styles, Events, States, Snapshot
      </h2>

      <h3 data-testid="companyName">Company Name: Cognizant</h3>
      {/* Inline styles */}
      <p
        data-testid="foundedYear"
        style={{
          color: '#ff0000',
          fontWeight: 'bold'
        }}
      >
        Founded Year: {foundedYear}
      </p>
      <input
        type="text"
        placeholder="Enter Your Country Name"
        value={countryName}
        onChange={handleCountryNameChange}
      />
      <p data-testid="visitWebsite">
        Please visit Cognizant {countryName} website!
      </p>

      <input
        type="email"
        placeholder="Enter E-Mail"
        className="form-control"
        style={{ width: '300px' }}
      />
      <button type="button" className="btn btn-primary">
        Subscribe(d) to Careers Newsletter
      </button>
      <p>We will send Careers Newsletter E-Mails to a@b.com</p>
    </div>
  );
};
CompanyInfo.propTypes = {
  foundedYear: PropTypes.string
};

export default CompanyInfo;
