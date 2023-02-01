import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

   function Login({onValChange} ) {
    let {id} = useParams();
    let [user ,setUsers] = useState();
    let baseURL = "  http://localhost:3002/users";
    let navigate = useNavigate();

    useEffect(() =>{
      axios.get(`${baseURL}/${id}`).then((response)=>{
        setUsers(response.data);
      });

    }, [id]);
  
      const [formValue, setFormValue] = useState({
          username : " ",
          password : " ",
      });

      const [errors, setErrors] = useState({
          username :null,
          password :null,
      });

      useEffect(() => {
        if(id){
          axios.get(`${baseURL}/${id}`).then((response)=>{
            setUsers(response.data);
            setFormValue(response.data);
          });
        }
      }, [id]);


        const getNameValues = (e) => {
          if (e.target.value.length <= 3) {
            setErrors({
              ...errors,
              username: "username must be grater than 3",
            });
          } else {
            setErrors({
              ...errors,
              username: null,
            });
            setFormValue({
              ...formValue,
              [e.target.name]: e.target.value,
            });
          }
        };
  
      useEffect(() => {}, [formValue.password]);
      const getPasswordValues = (e) => {
        if (e.target.value.length <= 8) {
          setErrors({
            ...errors,
            password: "Password must be grater than 8 ",
          });
        }else {
          setErrors({
            ...errors,
            password: null,
          });
          setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
          });
        }
      };

      //=================  
      const clickHandler=( )=>{
        if(id){
          axios.put(`${baseURL}/${id}`,formValue)
          .then((response)=>{
            navigate('/users');
          }).catch (error =>{
            console.log(error);
          });
        }else{
          axios
          .post(baseURL,formValue)
          .then ((response)=>{})
          .catch ((error)=>{
            console.log(error);
          });
        } navigate("/users");
      };
      //==================
    return (
      <div className="bg-light p-3 text-light col-6 m-auto mt-3">
          <h2 className=" text-dark text-center mb-4"> Login</h2>
          <div className="container p-5">
              <div className="row g-4">
                  <input
                   type="text"
                   name="username"
                   placeholder={id? `${user?.username}`:"Enter Your Name"}
                   onChange={onValChange}
                   onClick={getNameValues}
                   defaultValue={user?.username}
                   className={`form-control ${errors.username ? "red" : "green"}`}
                  />
                  {errors.username && <p className="text-danger">{errors.username}</p>}
  
                  <input
                   type="text"
                   name="password"
                   placeholder={id? `${user?.password}` :"Enter Your Password"}
                   className={`form-control ${errors.password ? "red" : "green"}`}
                   onChange={getPasswordValues}
                    defaultValue={user?.password}
                  />
                  {errors.password && <p className="text-danger">{errors.password}</p>} 
                  
                  <button className="btn btn-warning mt-4"
                  onClick={clickHandler}>
                    { id? "Edit user":"Add New User"}
                  </button>
                </div>
              </div>
          </div>
    );
  }  
  export default Login;