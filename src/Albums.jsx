import React, { useState, useEffect } from "react";
import axios from "axios";
import { httpService } from './http-service';
import { setAlbumsActionCreator } from './actions/albumActionCreator';
import { useDispatch } from 'react-redux';

const Albums = props => {
    const [result, setResult] = useState([]);
    console.log('Post entered');
    const dispatch = useDispatch();   

    useEffect (async () => {
        try {
          const response = await httpService.get('albums');
          let count = (response.data.length);
          console.log("Count of data " + count);
          dispatch(setAlbumsActionCreator(count));
          setResult(response.data);
        } catch (e) {
          console.log('Oops! Error occurred', e.message);
        }
      }, []);    
  
    return (
      <>
        <h3>Albums</h3>      
  
        <table className="table table-bordered mt-4 table-hover">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Album ID</th>
              <th>Title</th>              
            </tr>
          </thead>
          <tbody>
            {result.map((r) => {
              return (
                <tr key={r.id}>
                  <td>{r.userId}</td>                  
                  <td>{r.id}</td>                  
                  <td>{r.title}</td>                   
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
};

export default Albums;
