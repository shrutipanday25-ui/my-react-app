function JobCard({ title, company, location, isNew }) {
  return (
    <div>
      <h2>
        {title} {isNew && <span>New!</span>}
      </h2>

      <p>Company: {company}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default JobCard;