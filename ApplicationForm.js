import React, { useState } from 'react';

function ApplicationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        resume: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleResumeUpload = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, resume: file });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, including resume upload
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div>
                <label>Resume:</label>
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} />
            </div>
            <button type="submit">Apply</button>
        </form>
    );
}

export default ApplicationForm;
