import { createStore } from "redux";

const reducerFn=(state={count:0},action)=>{
        switch(action.type){
            case "Increment":
                  return {...state,count:state.count+1};
                  break;
            case "Decrement":
                  return {...state,count:state.count-1};
                  break; 

            case "add":
                  return {...state,count:state.count+action.payload}
            default:
                  return state;
                  break;
        }
}

export const store=createStore(reducerFn);
