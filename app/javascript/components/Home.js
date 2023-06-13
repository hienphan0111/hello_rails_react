import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Hello React in RoR app</h1>
      <Link to="message">Click here to see a random message</Link>
    </>
  )
};

export default Home;
