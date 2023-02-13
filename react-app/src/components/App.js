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
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null);


  return (
    <div className="App">

      <NavBar currentUser = {currentUser}/>
      <Header setCurrentUser={setCurrentUser} />
      <Body setEmployees={setEmployees} />

      <Results employees={employees} currentUser = {currentUser}/>

    </div>
  );
}

export default App;

