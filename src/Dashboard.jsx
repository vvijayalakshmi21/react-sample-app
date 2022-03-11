import React from 'react';
import {  useSelector } from 'react-redux';

const Dashboard = props => {
    const totalAlbums = useSelector((state) => state.album);
    const totalPosts = useSelector((state) => state.post);

  return (
    <React.Fragment>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>Dashboard</h1>
          <p className='lead'>
              Total Albums: {totalAlbums}, 
              Total Posts: {totalPosts}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
