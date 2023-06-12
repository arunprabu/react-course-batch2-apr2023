import React from 'react'
import Hello from './Hello/Hello';
import Bye from './Bye/Bye';
import applyStyles from '../../hoc/applyStyles';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemoPage = () => {
  return (
    <div>
      <h2>Hoc Demo</h2>

      <StyledHello name="John" />
      <StyledBye name="John" />

    </div>
  );
}

export default HocDemoPage