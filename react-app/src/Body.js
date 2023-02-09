import React, { useState } from 'react';
import './Body.css';

function Body() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        window.location.replace(`/home?search=${selectedOption}&field=${searchTerm}`);
        const url = `http://localhost:8081/home?search=${selectedOption}&field=${searchTerm}`;
        console.log(fetch(url));

    };

    return (
        <div className="body">
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)} />
                    <div className="checkbox-group">
                        <label>
                            <input
                                type="radio"
                                value="emp_id"
                                checked={selectedOption === "emp_id"}
                                onChange={handleOptionChange} />
                            Id
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="first_name"
                                checked={selectedOption === "first_name"}
                                onChange={handleOptionChange} />
                            First Name
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="last_name"
                                checked={selectedOption === "last_name"}
                                onChange={handleOptionChange} />
                            Last Name
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="phone_number"
                                checked={selectedOption === "phone_number"}
                                onChange={handleOptionChange} />
                            Phone Number
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="job_role"
                                checked={selectedOption === "job_role"}
                                onChange={handleOptionChange} />
                            Job Role
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="work_location"
                                checked={selectedOption === "work_location"}
                                onChange={handleOptionChange} />
                            Work Location
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="salary"
                                checked={selectedOption === "salary"}
                                onChange={handleOptionChange} />
                            Salary
                        </label>
                    </div>
                    <button type="submit">Go</button>
                </form>
            </div>

        </div>
    );
}

export default Body;
