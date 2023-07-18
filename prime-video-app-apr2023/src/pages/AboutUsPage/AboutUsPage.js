// rafce
import React from 'react';
import PropTypes from 'prop-types';
import MockFragment from './MockFragment/MockFragment';

const AboutUsPage = (props) => {
  return (
    <div>
      <h1>Let us explore a bit more React</h1>
      <p>About Fragment-like JSX-less component</p>

      <MockFragment>
        <p>Hey</p>
        <p>How are you?</p>
      </MockFragment>

      {/* Demo'ing runtime error thru error boundary */}
      {/* <p>{props.test()}</p> */}
    </div>
  );
}

AboutUsPage.propTypes = {
  test: PropTypes.func
};

export default AboutUsPage
