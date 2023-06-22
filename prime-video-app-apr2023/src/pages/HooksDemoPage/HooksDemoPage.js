import React from 'react'
import MyAccount from './MyAccount/MyAccount';
import Blog from './Blog/Blog';

const HooksDemoPage = () => {
  return (
    <div>
      <h1>Hooks Demo</h1>
      <h2>My Account | useState hook Demo</h2>
      <MyAccount />

      <hr />
      <h2>Blog | useEffect hook Demo</h2>
      <Blog />

      <h2>useRef & useReducer hook Demo</h2>

      <h2>useId hook Demo</h2>

      <h2>useContext Demo - will explain in another comp</h2>
    </div>
  );
}

export default HooksDemoPage;
