import React from 'react';
import Featured from './Featured';
import Matches from './Matches';
import Players from './Players';
const Home = () => {
  return (
    <div className="bck_blue">
      <Featured/>
      <Matches/>
      <Players/>
    </div>
  );
};

export default Home;