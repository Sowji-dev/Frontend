var InitialValues={
    count:5
}
function CounterReducer(state=InitialValues,action){
    console.log('CounterReducer')
    if(action.type=="inc"){
        return {...state,count:state.count+1}
    }
    if(action.type=="dec"){
       return {...state,count:state.count-1}
    }
    if(action.type=="reset"){
      return InitialValues;
    }
    return state
}
export default CounterReducer;