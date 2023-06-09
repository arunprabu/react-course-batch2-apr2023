//rafce
import React from 'react';
import MockFragment from './MockFragment/MockFragment';

const AboutUsPage = () => {
  let feature = 'React Advanced Concepts';

  return (
    <div>
      <h1>Let's explore a bit more React</h1>
      <p>About Fragment-like JSX-less component</p>

      <MockFragment>
        <p>Hey</p>
        <p>How are you?</p>
      </MockFragment>
      <p>{feature()}</p>
    </div>
  );
}

export default AboutUsPage
