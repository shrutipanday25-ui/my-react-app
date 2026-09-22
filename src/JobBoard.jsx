import JobCard from "./JobCard";

function JobBoard({ jobs }) {
  return (
    <div>
      <h2>Job Board</h2>

      {jobs.map((job) => (
        <JobCard
          key={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          isNew={job.isNew}
        />
      ))}
    </div>
  );
}

export default JobBoard;