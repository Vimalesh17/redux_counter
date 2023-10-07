import React, { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import { decrement, increment,incrementByAmount} from "../counter/counterSlice";


export default function Counter (){
    const count = useSelector((state)=>state.counter.value)
    const dispatch= useDispatch()
    const [data,setData]=useState(0)
    function handleChange(e){
        setData(e.target.value);
    }
    // function incrementByAmount(){
    //     dispatch(data);
    // }
    return(
        <div>
            <div>
                <button onClick={()=>dispatch(increment())}>Increment</button>
                <span>{count}</span>
                <button onClick={()=>dispatch(decrement())}>Decrement</button>
                <input type="number" onChange={handleChange}/>
                <button onClick={()=>dispatch(incrementByAmount(parseInt(data)))}>Increment By amount</button>
            
            </div>
        </div>
    )
}