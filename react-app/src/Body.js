import React, { useState } from 'react';
import './Body.css';

function Body() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="body">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)} />
                <div className="checkbox-group">
                    <label>
                        <input
                            type="radio"
                            value="_id"
                            checked={selectedOption === "_id"}
                            onChange={handleOptionChange} />
                        id
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="first_name"
                            checked={selectedOption === "first_name"}
                            onChange={handleOptionChange} />
                        first name
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="last_name"
                            checked={selectedOption === "last_name"}
                            onChange={handleOptionChange} />
                        last name
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="phone_number"
                            checked={selectedOption === "phone_number"}
                            onChange={handleOptionChange} />
                        phone number
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="job_role"
                            checked={selectedOption === "job_role"}
                            onChange={handleOptionChange} />
                        job role
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="work_location"
                            checked={selectedOption === "work_location"}
                            onChange={handleOptionChange} />
                        work location
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="salary"
                            checked={selectedOption === "salary"}
                            onChange={handleOptionChange} />
                        salary
                    </label>
                </div>
                <button type="submit">Go</button>
            </div>
        </div>
    );
}

export default Body;
