import React, { useState } from 'react'

const MyAccount = () => {
  // console.log('Program Started');
  const [accountName, setAccountName] = useState('john');
  const [age, setAge] = useState(20);

  const handleChangeAccountName = () => {
    console.log('Inside handleChangeAccountName');
    setAccountName('steve');
  }

  // console.log('Program Ended');
  return (
    <div>
      <p>Account Name: {accountName}</p>
      <button type="button" onClick={handleChangeAccountName}>
        Change Account Name
      </button>

      <p>Age: {age}</p>
      <button
        type="button"
        onClick={() => {
          setAge(30);
        }}
      >
        Change Age
      </button>

      <hr/>
      <button type="button">Login | Logout</button>
    </div>
  );
}

export default MyAccount;
