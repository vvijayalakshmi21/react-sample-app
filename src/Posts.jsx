import React, { useState, useEffect } from "react";
import axios from "axios";
import { httpService } from './http-service';
import { useDispatch } from 'react-redux';
import { setPostsActionCreator } from "./actions/postActionCreater";

const Posts = props => {
    const [result, setResult] = useState([]);
    const dispatch = useDispatch();   

    useEffect (async () => {
        try {
          const response = await httpService.get('posts');
          let count = (response.data.length);
          console.log("Count of data " + count);
          dispatch(setPostsActionCreator(count));
          setResult(response.data);
        } catch (e) {
          console.log('Oops! Error occurred', e.message);
        }
      }, []);    
  
    return (
      <>
        <h3>Posts</h3>      
  
        <table className="table table-bordered mt-4 table-hover table-sm">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Post ID</th>
              <th>Title</th>
              <th>Body</th>              
            </tr>
          </thead>
          <tbody>
            {result.map((r) => {
              return (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.id}</td>
                  <td>{r.title}</td>
                  <td>{r.body}</td>                    
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
};

export default Posts;



