import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function JobDetail() {
    const { jobId } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        // Fetch job details by jobId from the server and set them in the state
    }, [jobId]);

    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            {/* Other job details */}
        </div>
    );
}

export default JobDetail;