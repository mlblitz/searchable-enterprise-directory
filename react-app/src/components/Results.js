import React from 'react';
import '../styles/Results.css';

function Results({ employees, currentUser}) {
    console.log(currentUser);

    return (
        <div className="results-container">
            {employees.map((employee, index) => (
                <div key={index} className="employee-container">
                    <div className="employee-header">
                        <h3>{employee.first_name} {employee.last_name}</h3>
                    </div>
                    <div className="employee-details">
                        <p>Id: {employee.emp_id}</p>
                        <p>Phone Number: {employee.phone_number}</p>
                        <p>Job Role: {employee.job_role}</p>
                        <p>Work Location: {employee.work_location}</p>
                        {(currentUser === employee.emp_id || currentUser === employee.manager) && (
                            <p>Salary: {employee.salary}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Results;
