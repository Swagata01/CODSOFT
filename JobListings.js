import React, { useEffect, useState } from 'react';

function JobListings() {
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        // Fetch job listings from the server and set them in the state
        // You can use Axios or Fetch API for this
    }, []);

    return (
        <div>
            <h2>Job Listings</h2>
            <ul>
                {jobListings.map(job => (
                    <li key={job.id}>
                        <a href={`/job/${job.id}`}>{job.title}</a>
                        <p>{job.company}</p>
                        {/* Other job details */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobListings;