import JobBoard from "./JobBoard";

function App() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Dev",
      company: "TechCorp",
      location: "Remote",
      isNew: true,
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "CodeTech",
      location: "Pune",
      isNew: false,
    },
    {
      id: 3,
      title: "React Developer",
      company: "Wassha",
      location: "Remote",
      isNew: true,
    },
  ];

  return (
    <div>
      <JobBoard jobs={jobs} />
    </div>
  );
}

export default App;