import React, { useContext } from 'react'
import MyAccount from './MyAccount/MyAccount';
import Blog from './Blog/Blog';
import TodosVariant1 from './TodosVariant1/TodosVariant1';
import TodosVariant2 from './TodosVariant2/TodosVariant2';
import PaymentForm from './PaymentForm/PaymentForm';
import { PageContext } from '../../contexts/PageContext';

const HooksDemoPage = () => {
  const userStatus = useContext(PageContext);

  return (
    <div>
      <h1>Hooks Demo</h1>
      <h2>My Account | useState hook Demo</h2>
      <MyAccount />

      <hr />
      <h2>Blog | useEffect hook Demo</h2>
      <Blog />

      <h2>useRef & useReducer hook Demo</h2>
      <TodosVariant1 />
      <TodosVariant2 />

      <h2>useId hook Demo</h2>
      <PaymentForm />

      <hr/>
      <h2>useContext Demo</h2>
      <p>Last Login: {userStatus.lastLogin.toString()}</p>

    </div>
  );
}

export default HooksDemoPage;
