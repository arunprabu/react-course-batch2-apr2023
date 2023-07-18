// rafce
import React from 'react';
import PropTypes from 'prop-types';
import MockFragment from './MockFragment/MockFragment';
import useFetch from '../../hooks/useFetch';

const AboutUsPage = (props) => {
  const { isLoading, apiData, isError } = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

  return (
    <>
      <h1>Let us explore a bit more React</h1>
      <p>About Fragment-like JSX-less component</p>

      <MockFragment>
        <p>Hey</p>
        <p>How are you?</p>
      </MockFragment>

      {/* Demo'ing runtime error thru error boundary */}
      {/* <p>{props.test()}</p> */}

      {isLoading && <div className="spinner-border"></div>}

      {isError && <div className='alert alert-danger'>Some error occurred</div>}

      {apiData &&
        apiData.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}

AboutUsPage.propTypes = {
  test: PropTypes.func
};

export default AboutUsPage
