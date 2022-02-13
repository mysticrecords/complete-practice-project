import React from 'react';

import UserInput from './components/UserInput/UserInput';
import './App.css';


const App = () => {
  return (
    <div>
      <section id="user-form">
        <UserInput></UserInput>
      </section>
      <section id="user-list"></section>
    </div>
  );
}

export default App;
