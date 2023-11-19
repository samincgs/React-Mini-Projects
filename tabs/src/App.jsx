import { useEffect, useState } from 'react';

import Loading from './components/Loading.jsx';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const jobData = await response.json();

      setJobs(jobData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <div className='jobs-container'>hello react</div>
    </main>
  );
}

export default App;
