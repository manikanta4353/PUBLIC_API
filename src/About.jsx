import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const About = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      axios.get('http://localhost:5000/about')
        .then(response => setData(response.data))
        .catch(error => console.error('Error fetching about data:', error));
    }, []);
  
    return (
      <div>
        <h1>About</h1>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
      </div>
    );
  };

  
  export default About;