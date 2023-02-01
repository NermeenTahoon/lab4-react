import React,{useContext} from 'react';
import { CounterContext } from "../context/counterContext";

export default function Home() {
  let {count ,increase} = useContext (CounterContext);


  return (
    <div className="alert alert-success p-5">
        <div className="container">
            <div className="row">
                <h1> Home Page </h1>
                <p className="h2">Count: {count}</p>
                <button className="btn btn-warning"
                onClick={increase}>Add</button>
            </div>
        </div>
    </div>
  );
}
