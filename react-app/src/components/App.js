// _id, first_name, last_name, phone_number, job_role, work_location, salary
import '../styles/App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Results from './Results';
import Body from './Body';
import NavBar from './NavBar';
import '../styles/Header.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentUser, setCurrentUser] = useState(-1);

  return (
    <div className="App">

      <NavBar />
      <Header setCurrentUser={setCurrentUser} />
      <Body setEmployees={setEmployees} />

      <Results employees={employees} />

    </div>
  );
}

export default App;

