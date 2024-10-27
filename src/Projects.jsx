import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Projects = () => {
    const [projects, setProjects] = useState(null);
  
    useEffect(() => {
      axios.get('http://localhost:5000/projects')
        .then(response => setProjects(response.data))
        .catch(error => console.error('Error fetching projects data:', error));
    }, []);
  
    return (
      <div>
        <h1>Projects</h1>
        {projects ? (
          <div>
            <h2>{projects.title}</h2>
            <p>{projects.description}</p>
          </div>
        ) : 'Loading...'}
      </div>
    );
  };

  
  export default Projects;