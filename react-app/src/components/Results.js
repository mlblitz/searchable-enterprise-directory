import React from 'react';
import '../styles/Results.css';

function Results({ employees, currentUser }) {
  return (
    <div className="results-container">
       { console.log(employees)}
      {employees.map((employee, index) => (
        <div key={index} className="employee-container">
          <div className="employee-header">
            <h3>{employee.first_name} {employee.last_name}</h3>
          </div>
          <div className="employee-details">
            <p>Id: {employee._id}</p>
            <p>Phone Number: {employee.phone_number}</p>
            <p>Job Role: {employee.job_role}</p>
            <p>Work Location: {employee.work_location}</p>
            {currentUser !== -1 && (
              <p>Salary: {employee.salary}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
