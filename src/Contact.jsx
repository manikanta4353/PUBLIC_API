import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Contact = () => {
    const [contact, setContact] = useState(null);
  
    useEffect(() => {
      axios.get('http://localhost:5000/contact')
        .then(response => setContact(response.data))
        .catch(error => console.error('Error fetching contact data:', error));
    }, []);
  
    return (
      <div>
        <h1>Contact</h1>
        {contact ? <p>Email: {contact.email}</p> : 'Loading...'}
      </div>
    );
  };

  export default Contact;