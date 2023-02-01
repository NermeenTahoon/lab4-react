import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';

export default function Details() {
  let baseURL = "  http://localhost:3002/users";
  let [user , setUsers] = useState ([]);
  let {id} = useParams();
  console.log(id);
  let navigate = useNavigate();
  
  const BackToUsers=() =>{
    navigate("/users");
  };

  useEffect(()=>{
    axios
    .get(`${baseURL}/${id}`)
    .then((response)=>{
      setUsers(response.data);
    })
    .catch((error)=>{
      console.log(error);
    });
  }, [ ]);

  return (
    <div className=" bg-light p-5 text-success text-center">
      <div className="container">
        <div className="row">
        <h1>User Details</h1>
        <div className="alert alert-primary">
            <h2>Username:{user?.username}</h2>
            <h2>Password:{user?.password}</h2>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
           alias odit at dolor, quasi voluptates accusantium modi molestiae 
           nobis fugit deleniti officia expedita nulla architecto,
           nam doloribus reiciendis! Corrupti, nulla.</p>
        </div>
      </div>
    </div>
  )
}
