import { useReducer, useState } from "react"
const reducer = (state,action) =>{
    switch(action.type){
        case "INCREASE":
            return action.counter+1;
        case "DECREASE":
            return action.counter-1;
        default :
            return state;
    }
}

const Counter = () =>{
    const [counter,dispatch] = useReducer(reducer,0);
    const handleClick = () =>{
        console.log("called the click");
    }
    return (
        <div>
            Hi
            <h1>This is the counter : {counter}</h1>
            <button onClick={()=>dispatch({type:"INCREASE",counter:counter})}><strong>+</strong></button>
            <button onClick={()=>dispatch({type:"DECREASE",counter:counter})}><strong>-</strong></button>
        </div>
    )
}

export default Counter;