import { useEffect, useState } from 'react';

import Loading from './components/Loading.jsx';
import Jobs from './components/Jobs.jsx';
import Buttons from './components/Buttons.jsx';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCompany, setCurrentCompany] = useState(0);

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
      <div className='container'>
        <Buttons
          jobs={jobs}
          currentCompany={currentCompany}
          setCurrentCompany={setCurrentCompany}
        />
        <Jobs jobs={jobs} currentCompany={currentCompany} />
      </div>
    </main>
  );
}

export default App;
