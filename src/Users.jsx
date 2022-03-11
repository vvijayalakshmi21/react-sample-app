import React, { useState, useEffect } from "react";
import { httpService } from './http-service';

const Users = props => {
    const [result, setResult] = useState([]);
    console.log('Post entered');

    useEffect (async () => {
        try {
          const response = await httpService.get('users');
          console.log('GET Response', response.data);
          setResult(response.data);
        } catch (e) {
          console.log('Oops! Error occurred', e.message);
        }
      }, []);    
  
    return (
      <>
        <h3>Users</h3>      
  
        <table className="table table-bordered mt-4 table-striped table-hover" >
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>              
            </tr>
          </thead>
          <tbody>
            {result.map((r) => {
              return (
                <tr key={r.id}>                                    
                  <td>{r.name}</td>
                  <td>{r.email}</td>
                  <td>{r.phone}</td>
                  <td>
                  {r.address.street}<br/>
                  {r.address.city}<br/>
                  {r.address.zipcode}
                  </td>
                </tr>                
              );
            })}
          </tbody>
        </table>
      </>
    );
};

export default Users;
