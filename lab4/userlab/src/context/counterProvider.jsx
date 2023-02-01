import React ,{useState}from 'react';
import { CounterContext } from "./counterContext";

export default function CounterProvider(props) {
    const [count , setCount] = useState(0);
    const increase =() =>{
        setCount(count +1);
    };
    const decrease =() =>{
        setCount(count -1);
    };
    let myObj ={
        count,
        increase,
        decrease,
    };

  return (
    <CounterContext.Provider value={myObj}>
        {props.children}
    </CounterContext.Provider>

  );
}
