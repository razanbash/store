import React ,{useReducer} from "react";
function reduce(state, action){
    switch (action.type){
        case "INREMENT":
            return{count : state.count + 1 };
            case "DECREMENT":
                return {count:state.count - 1 }
                case"REST":
                return{count:0}
                default:
                    return state;
    }
}

const initialState ={count:0}

function Counter (){
    const[state,dispatch] = useReducer(reduce,initialState);

    return(
        <div style={{textAlign:"center" ,marginTop:"40px"}}>
            <h2>counter:{state.count}</h2>
             <button onClick={() => dispatch({type: "INREMENT"})}>+</button>
              <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
               <button onClick={() => dispatch({type: "REST"})}>Rest</button>

        </div>
    )
}
export default Counter;