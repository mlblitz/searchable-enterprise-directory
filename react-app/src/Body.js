import React, { useState } from 'react';
import './Body.css';

function Body() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (event) => {
        const option = event.target.value;
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((o) => o !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
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
                            type="checkbox"
                            value="_id"
                            checked={selectedOptions.includes("_id")}
                            onChange={handleOptionChange} />
                        _id
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="first_name"
                            checked={selectedOptions.includes("first_name")}
                            onChange={handleOptionChange} />
                        first_name
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="last_name"
                            checked={selectedOptions.includes("last_name")}
                            onChange={handleOptionChange} />
                        last_name
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="phone_number"
                            checked={selectedOptions.includes("phone_number")}
                            onChange={handleOptionChange} />
                        phone_number
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="job_role"
                            checked={selectedOptions.includes("job_role")}
                            onChange={handleOptionChange} />
                        job_role
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="work_location"
                            checked={selectedOptions.includes("work_location")}
                            onChange={handleOptionChange} />
                        work_location
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="salary"
                            checked={selectedOptions.includes("salary")}
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

