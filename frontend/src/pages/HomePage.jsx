import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        <h1 className=''>Welcome Home</h1>
        <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default HomePage;