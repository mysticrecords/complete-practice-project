import React, { useState } from 'react';

import UserInput from './components/UserInput/UserInput';
import './App.css';
import UserList from './components/UserList/UserList';


const App = () => {
  const [usersAndAge, setUsersAndAge] = useState([
    { id: 1, name: "Matt", age: 33 },
    { id: 2, name: "Effie", age: 12 }
  ]);

  ;


  const addUserHandler = (enteredText, enteredAge) => {
    setUsersAndAge(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ id: Math.random(), name: enteredText, age: enteredAge });
      return updatedUsers;
    })
  };

  return (
    <div>
      <section id="user-form">
        <UserInput onAddUser={addUserHandler} ></UserInput>
      </section>
      <section id="user-list">
        <UserList items={usersAndAge}></UserList>
      </section>
    </div>
  );
}

export default App;
