//rafce
import React from 'react';
import MockFragment from './MockFragment/MockFragment';

const AboutUsPage = (props) => {

  return (
    <div>
      <h1>Let's explore a bit more React</h1>
      <p>About Fragment-like JSX-less component</p>

      <MockFragment>
        <p>Hey</p>
        <p>How are you?</p>
      </MockFragment>
      <p>{props.add()}</p>
    </div>
  );
}

export default AboutUsPage
