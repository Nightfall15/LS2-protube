import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from './utils.ts';

function App() {
  const [value, setValue] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getVideos = async () => {
      setLoading(true);
      const response = await axios.get<string[]>(`${BACKEND_URL}/api/videos`);
      setValue(response.data);
      setLoading(false);
    };
    getVideos().then();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="/protube-logo-removebg-preview.png" className="App-logo" alt="logo" />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {' '}
            <strong>Videos available:</strong>
            <ul>
              {value.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
