import React from 'react';
import axios from "axios";
import { useState,useEffect } from 'react';
import { NavLink ,useNavigate } from 'react-router-dom';

export default function Users() {
  let baseURL = "  http://localhost:3002/users";
  let [users , setUsers] = useState ([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
    .get(baseURL)
    .then ((response)=>{
      setUsers(response.data);
    })
    .catch((error)=>{
      console.log(error);
    });
  }, [ ]);

  const goToDetailPage =(userId)=>{
    navigate(`/users/${userId}`);
  }
  const goToUpdatePage=(userId)=>{
    navigate (`/login/${userId}`);
  }
  
  const deletUser=(userId)=>{
    axios.delete(`${baseURL}/${userId}`).then((response)=>{
      setUsers(users.filter((user)=> user.id != userId));
    });
  }

  return (
    <div className="alert alert-success">
      <div className="container">
        <h2 className="text-center text-dark mb-3 ">All Users Data </h2>
          <NavLink to ="/login/new" className="btn btn-outline-success mb-4">
              Add New User
          </NavLink>

        <div className="row">
          {users.map((users)=>{
            return(
              <div key={users.id} className="col-sm-6 col-md-3">
                <div className="alert alert-info g-2">
                  <div className="bg-light p-2 rounded mb-2">
                    <h3>Name:{users.username}</h3>
                    <p>Password:{users.password}</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, vero.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
                     doloribus ab cumque alias ad quas expedita odit perspiciatis soluta possimus sed.
                     Ratione in illo totam.
                  </p>


                  <div className="row p-4 g-2">
                    <button
                      onClick={() =>goToDetailPage(users.id)}
                      className="col-12 d-block w-100 btn btn-primary">
                      View User Data
                    </button>

                    <button 
                      onClick={()=>goToUpdatePage(users.id)}
                      className="col-12 d-block w-100 btn btn-danger">
                       Update User
                    </button>

                    <button
                        onClick={()=>deletUser(users.id)}
                       className="col-12 d-block w-100 btn btn-warning">
                        Delete User
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
