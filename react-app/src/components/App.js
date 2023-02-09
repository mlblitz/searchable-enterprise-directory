// _id, first_name, last_name, phone_number, job_role, work_location, salary
import '../styles/App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Login from './Login';
import Body from './Body';
import NavBar from './NavBar';
import '../styles/Header.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentUser, setCurrentUser] = useState(-1);
  // const url = "http://localhost:8081";
  // const [data, setData] = useState([]);


  // async function fetchData() {
  //   let data = await fetch(url)
  //       .then(res => res.json())
  //       // .then(res => console.log(res))
  //       // .then(res => res.fields);
  //   // console.log(films);
  //   setData(data);
  //   console.log(data);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <Login setCurrentUser = {setCurrentUser}/>
      <NavBar />
      <Header />
      <Body setEmployees = {setEmployees}/>
      <Result employees = {employees} currentUser = {currentUser}/>
    </div>
  );
}

export default App;

